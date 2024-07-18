import type {Challenge} from "assets/ctfs/index";

export default <Challenge>{
    name: "Simple Steg",
    sha256: "b79cd662cea35f71c5e7bf51663b79db7ee5b090c66fe262758edb23406bcdbe",
    desc: `
> Artwork: [@壱珂/ichika87](https://twitter.com/ichika087/status/1813158792424792107)

My friend sent me this nice drawing, but told me it is a ctf challenge, huh?
I guess the anime girl looks fine.

Anyways as I was solving it, I encountered a password and couldn't crack it, it shouldn't be long though.
I also don't think anything other than letters are involved...`,
    diff: "simple",
    tags: ['forensics'],
    files: [{url: "https://res.cloudinary.com/kumonochisanaka/image/upload/v1721145689/image.jpg", name: "anime.jpg"}]
}
