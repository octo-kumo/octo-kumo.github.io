import {AllAssets} from "~/games/civilisation-0/types";
import {GROUND_RULES} from "~/games/civilisation-0/terrain/wfc_rules";

const ground = AllAssets.ground;
const {allTiles, rules} = GROUND_RULES;

export function wfc(r: () => number, width: number, height: number) {
    const tiles = new Array(height).fill(0).map(a => new Array(width).fill(-1));
    const possibles = new Array(height).fill(0).map(a => new Array(width).fill(0).map(_ => Array.from(Array(rules.length * 4).keys())));

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {

        }
    }
}

function bfsGridTraversal<T>(grid: T[][], startX: number, startY: number, callback: (x: number, y: number, t: T) => void) {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array.from({length: rows}, () => Array(cols).fill(false));
    const queue = [{x: startX, y: startY}];

    const directions = [
        {dx: 1, dy: 0},
        {dx: -1, dy: 0},
        {dx: 0, dy: 1},
        {dx: 0, dy: -1}
    ];

    visited[startX][startY] = true;

    while (queue.length > 0) {
        const {x, y} = queue.shift()!;
        callback(x, y, grid[x][y]);

        for (const {dx, dy} of directions) {
            const newX = x + dx;
            const newY = y + dy;

            if (
                newX >= 0 && newX < rows &&
                newY >= 0 && newY < cols &&
                !visited[newX][newY]
            ) {
                visited[newX][newY] = true;
                queue.push({x: newX, y: newY});
            }
        }
    }
}
