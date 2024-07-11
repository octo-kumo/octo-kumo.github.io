const fs = require("fs");
const path = require("path");
const url = require("url");
const files = fs.readdirSync(path.join(__dirname, "../..", "public", "projects", "assets", "c0"));
const categories = {};
files.forEach(f => {
    let cat = f.split('.')[0].split('_')[0];
    (categories[cat] ??= []).push(f);
})

const code = `
export type AssetName = ${files.map(f => `'${f}'`).join(' | ')};
export const AllAssets: {
    [key in ${Object.keys(categories).map(c => `'${c}'`).join('|')}]: AssetName[]
} = ${JSON.stringify(categories)};
`

fs.writeFileSync(path.join(__dirname, "types.ts"), code);
