export type ProjectDef = {
    name: string;
    desc: string;
    langs: string[];
    keys?: string[];
    github?: string;
    link?: string;
    year: string;
    video?: string;
    image?: string;
};

const SUPER_OLD: ProjectDef[] = [{
    name: 'Ball',
    desc: 'Stress killer! Destroy those pesky shapes with your almighty wracking ball of doom!',
    langs: ['java'],
    keys: ['game'],
    image: 'https://github.com/octo-kumo/java-app-archive/blob/master/ball-demo.png?raw=true',
    link: 'https://github.com/octo-kumo/java-app-archive/raw/refs/heads/master/Ball.jar',
    year: '2017',
},
{
    name: 'Battleship',
    desc: 'Play battleship with your friend!',
    langs: ['java'],
    keys: ['game'],
    link: 'https://github.com/octo-kumo/java-app-archive/raw/refs/heads/master/BattleShip.jar',
    year: '2017',
},
{
    name: 'Bus Timing',
    desc: 'View bus status near my high school, only useful if you are studying at my high school!',
    langs: ['java'],
    link: 'https://github.com/octo-kumo/java-app-archive/raw/refs/heads/master/Bus.jar',
    year: '2017',
},
{
    name: 'Car',
    desc: 'Hill climb racing clone.',
    langs: ['java'],
    keys: ['game'],
    link: 'https://github.com/octo-kumo/java-app-archive/raw/refs/heads/master/Car.jar',
    image: 'https://github.com/octo-kumo/java-app-archive/blob/master/car.big.png?raw=true',
    year: '2017',
},
{
    name: 'Cats',
    desc: 'Battle cats clone.',
    langs: ['java'],
    keys: ['game'],
    link: 'https://github.com/octo-kumo/java-app-archive/raw/refs/heads/master/Cats.jar',
    image: 'https://github.com/octo-kumo/java-app-archive/blob/master/cats.big.png?raw=true',
    year: '2018',
},
{
    name: 'DarkLight',
    desc: 'Platformer where you can switch between light and dark worlds, both with different platforms!',
    langs: ['java'],
    keys: ['game'],
    link: 'https://github.com/octo-kumo/java-app-archive/raw/refs/heads/master/DarkLight.jar',
    image: 'https://github.com/octo-kumo/java-app-archive/blob/master/dark.png?raw=true',
    year: '2018',
},
{
    name: 'Gravity',
    desc: '2D N body gravity simulator with tidal disintegration and black holes.',
    langs: ['java'],
    keys: ['game', 'simulation'],
    image: 'https://raw.githubusercontent.com/octo-kumo/java-app-archive/refs/heads/master/gravity-2.png',
    link: 'https://github.com/octo-kumo/java-app-archive/raw/refs/heads/master/Gravity.jar',
    year: '2017',
},
{
    name: 'Level maker',
    desc: 'Make your own 2D platformer levels! Supports importing any image and turning it into a platformer level!',
    langs: ['java'],
    keys: ['game'],
    link: 'https://github.com/octo-kumo/java-app-archive/raw/refs/heads/master/LevelMaker.jar',
    year: '2017',
},
{
    name: 'Plane',
    desc: '2D plane shooter game.',
    langs: ['java'],
    keys: ['game'],
    link: 'https://github.com/octo-kumo/java-app-archive/raw/refs/heads/master/plane.jar',
    year: '2017',
},
{
    name: 'Shield',
    desc: 'Win by reflecting triangles into other triangles with your shield.',
    langs: ['java'],
    keys: ['game'],
    link: 'https://github.com/octo-kumo/java-app-archive/raw/refs/heads/master/Shield.jar',
    year: '2018',
},
{
    name: 'Trade',
    desc: 'Trading game?',
    langs: ['java'],
    keys: ['game'],
    link: 'https://github.com/octo-kumo/java-app-archive/raw/refs/heads/master/Trade.jar',
    image: 'https://github.com/octo-kumo/java-app-archive/blob/master/trade-demo.png?raw=true',
    year: '2018',
},
];

export const projects: ProjectDef[] = [
    ...SUPER_OLD,
    {
        name: 'zhyu.tk',
        desc: 'My first website, made in PHP, it had a chatbox and a bunch of other stuff I made back then. It also used to host my Java projects as jars.',
        langs: ['php', 'html', 'javascript', 'css'],
        year: '2017-2019',
        link: "https://web.archive.org/web/20190818144011/https://zhyu.tk/"
    },
    {
        name: 'Tank',
        desc: 'Tank Stars clone!',
        langs: ['java'],
        keys: ['gradle', 'libgdx', 'game', 'android'],
        image: 'https://github.com/octo-kumo/Tank/raw/master/images/img.webp',
        link: 'https://yun.ng/Tank/',
        github: 'octo-kumo/Tank',
        year: '2019'
    },
    {
        name: 'Palm',
        desc: '(Unfinished) 2D Platformer game, with physics, shadows, swords and magic.',
        langs: ['java'],
        keys: ['gradle', 'libgdx', 'game', 'android', 'box2d'],
        video: '06f5jsTaa-8',
        year: '2019'
    },
    {
        name: 'NanoGun',
        desc: '2D shooter game with no dependencies.',
        langs: ['java'],
        keys: ['game'],
        link: 'https://github.com/octo-kumo/java-app-archive/raw/refs/heads/master/NanoGun.jar',
        image: 'https://github.com/octo-kumo/java-app-archive/blob/master/nanogun.png?raw=true',
        year: '2019'
    },
    {
        name: 'SGCC',
        desc: 'A game for Singapore Games Creation Competition, made in Unity.',
        langs: ['C#'],
        keys: ['unity', 'game'],
        year: '2019'
    },
    {
        name: 'Bus finder',
        desc: 'Hackathon 3rd place: An application to find buses and receive notification when bus is about to arrive.',
        langs: ['javascript', 'html'],
        keys: ['node.js'],
        year: '2019'
    },
    {
        name: 'Space',
        desc: '4K HD 3D N-Body simulator, in JavaFX, with i18n and configurations.',
        langs: ['java', 'javafx'],
        keys: ['simulation', 'game'],
        video: 'Q_EIy8KmvHc',
        github: 'octo-kumo/Space',
        year: '2019'
    },
    {
        name: 'kumo (discord bot)',
        desc: 'General purpose custom discord bot for my own use, and for my classmates.',
        langs: ['javascript'],
        keys: ['discord.js', 'heroku', 'github/ci', 'mongodb'],
        year: '2019-2022'
    },
    {
        name: 'Azurlane API',
        desc: 'Scraps the azurlane wiki into JSON, automated. Part of 2020 GitHub Archive Program.',
        langs: ['javascript', 'typescript'],
        keys: ['scraping'],
        year: '2019-2022',
        github: 'AzurAPI/azurapi-js-setup'
    },
    {
        name: 'Rating App',
        desc: 'Android application that allows the user to rate events, uses firebase for auth.',
        langs: ['java'],
        keys: ['firebase', 'android'],
        year: '2020',
    },
    {
        name: 'gomoku',
        desc: 'Multiplayer socket based web game, the game gomoku.',
        langs: ['html', 'javascript', 'css'],
        keys: ['heroku', 'socket.io', 'express.js', 'node.js', 'mongodb'],
        year: '2020'
    },
    {
        name: 'kumo-mod',
        desc: 'A cool little *client-side* mod for minecraft',
        langs: ['java'],
        keys: ['minecraft'],
        year: '2020'
    },
    {
        name: 'It-is-noisy',
        desc: 'Hackathon 3rd place, visualize noise levels in neighbourhood.',
        langs: ['javascript', 'html'],
        keys: ['electron'],
        year: '2020',
        github: 'octo-kumo/it-is-noisy',
        video: 'CPCLDOhJSQA'
    },
    {
        name: 'BookDownloader',
        desc: 'A base strategy and collection of specific strategies that will scrap webnovels from certain sites and pack them nicely into epub.',
        langs: ['javascript'],
        keys: ['scraping'],
        year: '2020',
        github: 'octo-kumo/BookDownloader',
    },
    {
        name: 'QuickMacro',
        desc: 'Quickly record and play macros with time sensative actions! (only works on Mac)',
        langs: ['java'],
        github: 'octo-kumo/QuickMacro',
        year: '2020-2022'
    },
    {
        name: 'CTF Writeups',
        desc: 'Writeups for CTFs I participated in.',
        langs: ['md', 'python', "php", 'javascript', "typescript", "go", "c/c++", "perl", "caml", "TeX", "sql", "rust", "html", "css", "bash", "c#"],
        keys: ['docker', 'cybersecurity', "Metasploit", "Wireshark", "John", "Binwalk", "PwnTools", "Z3", "kali", "pwn", "forensics", "web exploitation", "cryptography", "linux", "unity"],
        github: 'octo-kumo/ctf-writeups',
        link: 'https://yun.ng/c/ctf',
        year: '2020-now'
    },
    {
        name: 'Physics Website',
        desc: 'A website that demostraits the properties and physics of superconductors. With fancy scroll animations.',
        langs: ['javascript', 'css', 'html', 'typescript', 'md'],
        keys: ['vue.js'],
        year: '2021'
    },
    {
        name: "Anime Character Extractor",
        desc: "Analyzes anime videos, extract all character faces, and cluster them. Manually labeled and cleaned training data.",
        image: "https://image.yun.ng/upload/v1743833563/c7yllsfevuiodciydhno.webp",
        langs: ["python"],
        keys: ["MaskRCNN", "ai", "tensorflow", "keras", "Autoencoder", "NumPy", "Pandas"],
        year: '2021',
    },
    {
        name: 'Buzz Dungeon',
        desc: 'Hack&Roll 2022 Entry, 2D dungeon / maze game.',
        langs: ['java'],
        keys: ['libgdx'],
        github: 'octo-kumo/buzz-dungeon-gdx',
        image: 'https://github.com/octo-kumo/buzz-dungeon-gdx/raw/master/images/4.png',
        year: '2022'
    },
    {
        name: 'HyperSketch',
        desc: 'I made the color picker function for my internship at STUCK Designs',
        langs: ['swift'],
        keys: ['ios'],
        year: '2022'
    },
    {
        name: 'Evil ER',
        desc: 'Best tool to edit your entity relationship / schema diagrams + auto SQL generation. 300+ downloads!',
        langs: ['java', 'sql'],
        keys: ['desktop app', 'database'],
        github: 'octo-kumo/evil-er',
        image: 'https://github.com/octo-kumo/evil-er/raw/master/icons/img.png',
        year: "2022",
    },
    {
        name: 'Evil ER: Web + Collab',
        desc: 'Collaborative, realtime, web based editing of ER diagrams!',
        langs: ['html', 'javascript', 'css', 'sql', 'typescript'],
        keys: ['socket', 'socket.io', 'nuxt', 'tailwind', 'express.js', 'mysql', 'vue.js', 'database'],
        github: 'octo-kumo/cs6131-project',
        image: 'https://github.com/octo-kumo/evil-er/raw/master/icons/img.png',
        year: "2022",
    },
    {
        name: "E-Notes",
        desc: "Note management system with role-based permissions, supporting Markdown, HTML, and Jupyter Notebook formats. Used by my highschool, with 420 total users. Led, managed and developed by me. Per request of highschool computer science department.",
        langs: ['html', 'css', 'javascript', 'typescript', 'md', 'scss'],
        keys: ['git', 'docker', 'express.js', 'fullstack', 'firebase', 'node.js', 'firestore', 'vue.js', 'FEVN'],
        link: 'https://enotes.nush.app/',
        image: 'https://raw.githubusercontent.com/appventure-nush/e-notes/refs/heads/master/images/thumb.png',
        github: 'appventure-nush/e-notes',
        year: '2020-2022'
    },
    {
        name: "exam clock",
        desc: "Exam clock that will connect to a central control server. You can access a web control panel after logining to control clock instances connected. QR code could also be used to authenticate a user.",
        langs: ['java', 'html', 'css', 'javascript'],
        keys: ['multiplatform', 'fullstack', 'express.js', 'handlebars'],
        year: '2020-2021',
    },
    {
        name: 'Network Contest',
        desc: 'Kahoot clone using sockets.',
        langs: ['java'],
        keys: ['network', 'socket'],
        github: 'octo-kumo/network-contest',
        year: '2022'
    },
    {
        name: "video essay transcriber",
        desc: 'Hackathon 3rd Place: Tired of watching long video essays? Needing to listen to lectures at 3 times speed just to listen normally? Our video essay transcription will end those problems once and for all. Video Essay Transcription transcribes videos essays with relevant images so that you get the same experience watching the video and reading our transcribing, and even saving your time doing so.',
        langs: ['python'],
        keys: ['ai', 'keras', 'sklearn', 'tensorflow', 'pytorch', 'selenium', "NumPy", "Pandas"],
        github: 'octo-kumo/video-essay-transcriber',
        year: '2022'
    },
    {
        name: "Reentry Simulator",
        langs: ["python"],
        keys: ["numerical", "simulation", "rk4"],
        link: "https://github.com/octo-kumo/docs/blob/master/reentry_simulation.pdf",
        desc: "Hypersonic re-entry vehicle simulated using realistic atmosphere and referenced research paper on drag at mach speeds.",
        year: "2022",
    },
    {
        name: "Capstone: AI AMV Generator",
        desc: "Automated video editing tool that synchronizes video clips with music by analyzing mood and tempo through CNNs and facial recognition, streamlining assembly for creators.",
        year: "2022",
        langs: ['python'],
        keys: ["keras", "sklearn", "tensorflow", "ai", "resnet34", "mood analysis", "opencv", "video editing", "NumPy", "Pandas"],
        link: "https://github.com/octo-kumo/docs/blob/master/ARP___Revised.pdf",
    },
    {
        name: "Yun's Website",
        desc: "This website and its subrepositories.",
        langs: ['html', 'css', 'javascript', 'typescript', 'md', 'less'],
        keys: ['nuxt.js', 'vue.js', 'three.js', 'github/ci', 'git'],
        link: 'https://yun.ng/',
        github: 'octo-kumo/octo-kumo.github.io',
        year: '2023-now'
    },
    {
        name: "pixiv manager",
        desc: "A pixiv downloader & manager & viewer.",
        langs: ['java'],
        keys: ['scraping', 'pixiv'],
        github: 'octo-kumo/pixiv-manager',
        link: 'https://github.com/octo-kumo/pixiv-manager/releases',
        image: 'https://github.com/octo-kumo/pixiv-manager/raw/master/github/images/img.jpg',
        year: '2023-2024'
    },
    {
        name: "air defence",
        desc: "Web-based 3D turret shooting game (WIP).",
        langs: ['typescript', 'javascript', 'glsl'],
        keys: ['three.js', 'vue.js', 'game', 'simulation'],
        github: 'octo-kumo/air-defence',
        link: 'https://yun.ng/projects/air-defence',
        image: 'https://image.yun.ng/upload/v1743829040/ebuggnx4tsxge4ypp1l3.webp',
        year: '2023-2024'
    },
    {
        name: 'hsr-sim-universe-utils',
        desc: 'Parses decompiled resources from game Honkai Starrail to create structured easy to use JSONs of certain parts.',
        langs: ['javascript'],
        github: 'octo-kumo/hsr-sim-universe-utils',
        link: "https://yun.ng/projects/simulated-universe",
        year: '2024',
    },
    {
        name: 'discord-chat-chart',
        year: '2023',
        langs: ['javascript', 'rust', 'html', 'css', 'jsx', 'tsx', 'typescript', 'python'],
        keys: ['tauri', 'discord.js', 'flask', 'hono', 'react.js', 'sentimental analysis'],
        desc: 'Uses 20+ discord user bot to circumvent ratelimiting and pull discord messages fast. Draw nice looking charts that including stats like emoji usage, word cloud, sentimental analysis, usage by time of day etc. You can share the charts with your friends~ Used Tauri to make a nice looking UI to interact with (not public).'
    },
    {
        name: 'htb-writeups',
        year: '2024',
        langs: ['md'],
        github: 'octo-kumo/htb-writeups',
        link: 'https://yun.ng/c/htb',
        keys: ['cybersecurity', 'linux'],
        desc: 'HackTheBox writeups, not that many because I don\'t use HTB that much.'
    },
    {
        name: "Timetable Widget",
        year: '2024',
        langs: ['java'],
        keys: ['widget', 'scraping'],
        github: 'octo-kumo/desktop-widgets',
        image: 'https://github.com/octo-kumo/desktop-widgets/raw/master/images/img2.png',
        desc: "Automatically fetches the timetable and displays today's schedule as a widget, only for mcgill."
    },
    {
        name: "mc-forensics",
        year: "2024",
        langs: ['java', 'javascript'],
        keys: ['NBT'],
        desc: "Minecraft forensics tool, with built-in JS evaluation engine to run custom scripts on NBT data.",
        image: "https://github.com/octo-kumo/mc-forensics/raw/master/img.png",
        github: "octo-kumo/mc-forensics"
    },
    {
        name: "globe-ctf",
        year: "2024",
        langs: ['typescript', 'scss', 'html', 'javascript', 'PLpgSQL'],
        keys: ['fullstack', 'three.js', 'postgres', 'rls', 'supabase', 'vue.js', 'nuxt.js', 'drizzle-orm', 'database', 'cybersecurity', 'serverless'],
        desc: "My attempt at making a fully custom made CTF event website, akin to CTFd, but modern, and serverless. Logic is handled purely by supabase and postgres (the goat)."
    },
    {
        name: "KMap Solver",
        year: "2024",
        langs: ['typescript'],
        keys: ['kmap', 'vue.js'],
        desc: "RPN logic expression parser + evaluator + truth table generation / custom truth table + kmap generation + kmap solver + DFS minimal cover pruning + shannon factorization + good UI",
        link: "https://yun.ng/projects/digital-logic",
        image: 'https://image.yun.ng/upload/v1743830774/llytz7xpqxizeqxnvr91.webp'
    },
    {
        name: "2D Triangulator",
        year: "2024",
        langs: ['typescript'],
        keys: ['simulation', 'vue.js'],
        desc: "N vector universal 2D triangulator, useful to finding minecraft bases",
        link: "https://yun.ng/projects/triangulator",
        image: 'https://image.yun.ng/upload/v1743830833/nlvxtyr0zy2fwkfdpyex.webp'
    },
    {
        name: "Finance Tools",
        year: "2024",
        langs: ['typescript'],
        keys: ['vue.js', 'finance'],
        desc: "Time value, annuity, arithmetic gradient, perpetuity calculator. And some other stuff.",
        link: "https://yun.ng/projects/finance"
    },
    {
        name: "ARM Simulator",
        year: "2025",
        langs: ['typescript', 'asm'],
        keys: ['arm', 'assembly', 'cpu'],
        desc: "Simulation of a ARM CPU.",
        github: "octo-kumo/arm-sim"
    },
    {
        name: "Drone Ground Station",
        year: "2025",
        langs: ['java', 'glsl'],
        keys: ['jmonkeyengine', 'serial', 'network', 'android', 'hardware'],
        desc: "3D ground control station for a drone using custom serial communication protocol. Displays the world map below you, auto load/unloads + LOD. Works on android.",
        github: "octo-kumo/drone-controller",
        image: "https://image.yun.ng/upload/v1743831406/kstqunyercuh9bm4zrwj.webp"
    },
    {
        name: "Deploy Flow",
        year: "2025",
        langs: ["python"],
        keys: ['ai', 'deepseek', 'agent', 'cli', 'terraform', 'cloud', 'aws'],
        desc: "AI-driven deployment tool that autonomously analyzes repositories, generates Terraform configurations and deployment scripts, and provisions cloud infrastructure, with ongoing refinement of remote execution.",
        image: "https://github.com/octo-kumo/deployflow/raw/master/img/img2.png",
        github: "octo-kumo/deployflow",
    },
    {
        name: "云酱 (discord bot)",
        year: "2025",
        langs: ["typescript", 'javascript', "shell", "digital ocean"],
        desc: "A discord bot that supports: drawing stat charts of your chat history (discord-chat-chart), playing the game 24, stock market simulator (you can trade any stock with it, uses real market info), loto, music playing, chat experience, loto etc. It also performs automated 5s interval bitcoin trading (simulated based on real prices). It also responds to mentions and replies with AI agent response, and can draw AI drawings given prompt for you.",
        keys: ["ai", "cloud", "finance", "quantitative trading", "data analysis", "discord.js"]
    },
    {
        name: "Minecraft Server",
        year: "2025",
        langs: ['java'],
        keys: ["minecraft", "gcp", "linux", "pufferpanel"],
        desc: "Forked & modified several mods for version compatibility, forked emogg to make it work well with DiscordIntegration such that you can send discord server's emojis in game, see them in discord and vice versa."
    },
    {
        name: "Bad Apple on DE1-SoC",
        year: "2025",
        langs: ['python', 'c', 'asm'],
        keys: ["huffman", "video compression", "de1-soc", "arm", 'bad apple'],
        desc: "Playing \"Bad Apple\" on a DE1-SoC by using python to resize and delta-encode the video into 8x8 blocks, then generate Huffman if-chain C code for on-the-fly huffman decoding.",
        video: "vN1YDjCYprw"
    },
    {
        name: "space-rs",
        year: "2025",
        langs: ['rust'],
        keys: ["game", "simulation", "wasm"],
        desc: "Space RS is a 2D N-body simulation game written in rust, it also simulates the roche limit and tidal disintegration.",
        github: "octo-kumo/space-rs",
        link: "https://yun.ng/space-rs",
        video: "ch8ig_aDqTE"
    }
] satisfies ProjectDef[];

projects.forEach(v => {
    if (v.keys) v.keys = v.keys.map(f => f.toLowerCase());
    if (v.langs) v.langs = v.langs.map(f => f.toLowerCase());
});
projects.sort((a, b) => {
    if (a.year === b.year) return 0;
    if (a.year < b.year) return 1;
    return -1;
});

export const keywords = [...new Set(projects.flatMap(v => [...v.langs, ...(v.keys ?? [])]).map(f => f.toLowerCase()))];
export const keywordsWeighted = projects.flatMap(v => [...v.langs, ...(v.keys ?? [])]).map(f => f.toLowerCase());

export function cosSim(vecA: number[], vecB: number[]) {
    if (vecA.length !== vecB.length) return 0;
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;
    for (let i = 0; i < vecA.length; i++) {
        dotProduct += vecA[i] * vecB[i];
        normA += vecA[i] * vecA[i];
        normB += vecB[i] * vecB[i];
    }
    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

export function mean1axis(arr: number[][]) {
    if (arr.length === 0) return [];
    const mean = Array(arr[0].length).fill(0);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            mean[j] += arr[i][j];
        }
    }
    return mean.map(v => v / arr.length);
}