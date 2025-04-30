import { projects } from "./projects";
import { join } from "path";


const file = Bun.file(join(__dirname, "out.json"))
const contents = await file.json();
const missing: string[] = [];
projects.forEach((project) => {
    if (!contents[project.desc]) missing.push(project.desc);
    project.langs.forEach((lang) => {
        if (!contents[lang]) missing.push(lang);
    });
    project.keys?.forEach((key) => {
        if (!contents[key]) missing.push(key);
    });
});

console.log("Missing keys: ", missing);

if (missing.length === 0) {
    console.log("No missing keys found.");
    process.exit(0);
}

const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        text: missing,
    })
};

try {
    const response = await fetch('https://ai.yun.ng/embed', options);
    const data = await response.json();
    if (Array.isArray(data.data)) {
        data.data.forEach((item: number[], index: number) => {
            contents[missing[index]] = item;
        });
        await file.write(JSON.stringify(contents));
    }
} catch (error) {
    console.error("Failed to fetch:", error);
}