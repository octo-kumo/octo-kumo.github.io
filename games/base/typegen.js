const fs = require("fs");
const path = require("path");
function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];
    files.forEach(file => {
        if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
            arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
        } else {
            if (file.endsWith(".glb"))
                arrayOfFiles.push(path.relative(path.join(__dirname, "../..", "public", "projects", "assets"), path.join(dirPath, file)).replace(/\\/g, "/"));
        }
    });
    return arrayOfFiles;
}

const files = getAllFiles(path.join(__dirname, "../..", "public", "projects", "assets"));
const categories = {};
files.forEach(f => {
    let cat = f.split('.')[0].split('_')[0];
    (categories[cat] ??= []).push(f);
})

const code = `
export type AssetName = ${files.map(f => `'${f}'`).join(' | ')};
export const AllAssets: {
    [key in ${Object.keys(categories).map(c => `'${c}'`).join('|')}]: AssetName[]
} = ${JSON.stringify(categories)} as const;
`

fs.writeFileSync(path.join(__dirname, "types.ts"), code);
