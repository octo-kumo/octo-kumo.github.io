function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase());
}

const NAMES: { [key: string]: string } = {
    "projects-er-editor": "ER Editor",
    "projects-json-schema": "JSON Editor",
    "projects-price-comparator": "Price Comparator",
    "projects-thumbnails": "Thumbnails",
};

export default function guessPathName(name: string | symbol | undefined) {
    return NAMES[<string>name] ?? toTitleCase(String(name).replace("projects-", "").replace("-", " "))
}
