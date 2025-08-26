import azurlane from "~/assets/ctfs/azurlane";
import simplesteg from "~/assets/ctfs/simplesteg";
import xor from "~/assets/ctfs/xor";
import ransomWaifu from "~/assets/ctfs/ransom-waifu";
import simplerRsa from "~/assets/ctfs/simpler-rsa";

const challeneges: Challenge[] = [
    azurlane,
    simplesteg,
    xor,
    ransomWaifu,
    simplerRsa
];
export default challeneges;

export type Challenge = {
    name: string,
    sha256: string,
    desc: string,
    diff: 'easy' | 'medium' | 'hard',
    tags: string[],
    files: { name: string, url: string, type?: 'web' | 'file' }[]
}
