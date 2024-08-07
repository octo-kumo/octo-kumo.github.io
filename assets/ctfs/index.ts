import azurlane from "assets/ctfs/azurlane";
import simplesteg from "assets/ctfs/simplesteg";
import xor from "assets/ctfs/xor";

const challeneges: Challenge[] = [
    azurlane,
    simplesteg,
    xor
];
export default challeneges;

export type Challenge = {
    name: string,
    sha256: string,
    desc: string,
    diff: 'simple' | 'medium' | 'hard',
    tags: string[],
    files: { name: string, url: string, type?: 'web' | 'file' }[]
}
