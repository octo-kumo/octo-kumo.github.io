import type { Challenge } from "~/assets/ctfs/index";

export default <Challenge>{
    name: "Ransom Waifu",
    sha256: "Mtx_g7TK1SVTyncOQeS9k0fhyIX2ZqssFj0-rD3Mq34",
    desc: `
The hackers' ransomware has locked up my waifu!
Help me find the passwords those hackers used!

In fact, I've already recovered 2/3 of the password! but I need your help to find the last part!`,
    diff: "medium",
    tags: ['rev'],
    files: [{ type: 'web', url: 'https://ransom.wwctf.com/', name: 'https://ransom.wwctf.com/' }]
}
