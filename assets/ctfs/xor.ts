import type { Challenge } from "assets/ctfs/index";

export default <Challenge>{
    name: "xor",
    sha256: "kMnKhLkyczFlBGbTYJmMV9-xSi4VBUoTt47Ostg2Ycs",
    desc: `
Imagine you have a flag, and you're standing in front of a huge field with countless flagpoles.

Each time you make a decision or a random guess, your flag is planted on one of these poles.

According to the Many-Worlds Interpretation of quantum mechanics, every possible outcome of your decision or guess actually happens.

So, there's a world out there in this vast field where your flag is planted on the correct pole.

However, I have made a quantum spacetime compressor based on **xor**, that will help you verify if your flag is correct.`,
    diff: "medium",
    tags: ['rev'],
    files: [{ url: "https://yun.ng/ctf/rev/xor", name: "xor" }]
}
