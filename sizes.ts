import { join } from "node:path";
import { stat, unlink } from "node:fs/promises";
import getTool from "./tools";

const ORIGINAL = join(import.meta.dirname, "public", "style.css");
// Test:
//   1. no css-dedup / no @nycss
//   2. css-dedup only
//   3. @nycss only
//   4. css-dedup -> @nycss
//   5. @nycss -> css-dedup
//
// Minification is always performed last.

const tempFile = () =>
    join('/tmp', `css-test-${Math.random().toString(36).substring(2, 15)}.css`);

type Step = 'css-dedup' | 'nycss';

const combinations: Step[][] = [
    [],
    ['css-dedup'],
    ['nycss'],
    ['css-dedup', 'nycss'],
    ['nycss', 'css-dedup'],
];

async function testComb(num: number, steps: Step[]) {
    const f = tempFile();
    const g = tempFile();

    try {
        // Start with the original CSS.
        await Bun.write(f, await Bun.file(ORIGINAL).arrayBuffer());

        for (const step of steps) {
            const tmp = tempFile();

            if (step === 'css-dedup') {
                await Bun.$`bun x css-dedup -a -s -z --fix ${f} && mv ${f} ${tmp}`;
            } else {
                await Bun.$`bun x @nycss/cli ${f} --dedupe true -o ${tmp}`;
            }

            await Bun.$`mv ${tmp} ${f}`;
        }

        // Always minify last.
        await Bun.$`${getTool('minify')} -o ${g} ${f}`;

        const size = (await stat(g)).size;
        const label = steps.length === 0 ? 'none' : steps.join(' -> ');

        return {
            num,
            steps,
            label,
            size,
        };
    } finally {
        await Promise.all([
            Bun.file(f).exists().then(exists => exists && unlink(f) as any),
            Bun.file(g).exists().then(exists => exists && unlink(g) as any),
        ]);
    }
}

const results = await Promise.all(
    combinations.map((steps, i) => testComb(i + 1, steps)),
);

results.sort((a, b) => a.size - b.size);

console.log('\nResults:');

for (const result of results) {
    console.log(
        `${result.label.padEnd(27)} ${result.size.toLocaleString()} bytes`,
    );
}

console.log(
    `\nBest: ${results[0].label} (${results[0].size.toLocaleString()} bytes)`,
);

/**
 * Results:
 * nycss -> css-dedup          31,992 bytes
 * css-dedup -> nycss          33,502 bytes
 * nycss                       33,708 bytes
 * css-dedup                   38,830 bytes
 * none                        39,668 bytes
 */