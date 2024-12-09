import type { Challenge } from "assets/ctfs/index";

export default <Challenge>{
    name: "Ransom Waifu",
    sha256: "32dc7f83b4cad52553ca770e41e4bd9347e1c885f666ab2c163d3eac3dccab7e",
    desc: `
The hackers' ransomware has locked up my waifu!
Help me find the passwords those hackers used!

In fact, I've already recovered 2/3 of the password! but I need your help to find the last part!`,
    diff: "medium",
    tags: ['rev'],
    files: [{ type: 'web', url: 'https://ransom.wwctf.com/', name: 'https://ransom.wwctf.com/' }]
}
