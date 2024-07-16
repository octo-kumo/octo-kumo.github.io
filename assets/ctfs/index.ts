import azurlane from "assets/ctfs/azurlane";
import simplesteg from "assets/ctfs/simplesteg";

const challeneges: Challenge[] = [
    azurlane,
    simplesteg
];
export default challeneges;

export type Challenge = {
    name: string,
    sha256: string,
    desc: string,
    diff: 'simple' | 'medium' | 'hard',
    tags: string[]
}
