// function wfcFindTiles(rules: number[][],)
/* clockwise rotation 90 degrees per tick */
import type {AssetName} from "~/games/civilisation-0/types";

type Rule = string[];
type Rules = Rule[];

function getRotation(me: number, you: number): number {
    if (me === 0) return (6 - you) % 4;
    if (me === 1) return 3 - you;
    if (me === 2) return (4 - you) % 4;
    if (me === 3) return (5 - you) % 4;
    return 0;
}

function compareStr(str1?: string, str2?: string) {
    if (str1 === str2) return true;
    if ((!str1) || (!str2)) return false;
    if (str1.length !== str2.length) return false;
    for (let i = 0; i < str1.length; i++) {
        if (str1.at(i) === str2.at(i) || str1.at(i) === '?' || str2.at(i) === '?') continue;
        return false;
    }
    return true;
}

export function getRuledBlocks(r: number[], allTiles: Rules[], tiles: AssetName[]): [AssetName, number][] {
    const edges = [
        '' + r[7] + r[0] + r[1],
        '' + r[1] + r[2] + r[3],
        '' + r[3] + r[4] + r[5],
        '' + r[5] + r[6] + r[7],
    ];
    const blocks: [AssetName, number][] = [];
    for (let i = 0; i < allTiles.length; i++) {
        for (let r = 0; r < allTiles[i].length; r++) {
            for (let rotate = 0; rotate < 4; rotate++) {
                if (edges.every((e, _) => compareStr(allTiles[i][r].at(rotate + _ - 4), e))) {
                    blocks.push([tiles[i], rotate * Math.PI / 2]);
                }
            }
        }
    }
    return blocks;
}

export function getRules(sockets: TemplateStringsArray): { allTiles: Rules[] } {
    const allTiles = sockets.join('').trim().split('\n').map(rules => {
        rules = rules.replace(/[^\d\s?]/g, '');
        return rules.split(" ").filter(Boolean).map(s => {
            const r = Array.from(s).map(w => w === '?' ? '?' : parseInt(w));
            return [
                '' + r[7] + r[0] + r[1],
                '' + r[1] + r[2] + r[3],
                '' + r[3] + r[4] + r[5],
                '' + r[5] + r[6] + r[7],
            ];
        });
    });
    // const rules = allTiles.map(tile => {
    //     return tile.map((edge, meE) => allTiles
    //         .flatMap((otile, youI) => otile.map((oedge, youR) => oedge === edge ? {
    //             tile: youI, rot: getRotation(meE, youR)
    //         } : undefined)).filter(Boolean)
    //     );
    // });
    return {allTiles}//, rules};
}

export const GROUND_RULES = getRules`
00000000 ground_grass.glb
10100000 ground_pathBend.glb
10100000 ground_pathBendBank.glb
11100000 ground_pathCorner.glb
11101111 ground_pathCornerSmall.glb
10101010 ground_pathCross.glb
00100000 ground_pathEnd.glb
00100000 ground_pathEndClosed.glb
11111111 ground_pathOpen.glb
00100010 ground_pathRocks.glb
11111000 ground_pathSide.glb
10101111 ground_pathSideOpen.glb
10101000 ground_pathSplit.glb
00100010 ground_pathStraight.glb
00000000 ground_pathTile.glb
20200000 ground_riverBend.glb
20200000 ground_riverBendBank.glb
222?000? ground_riverCorner.glb
22202222 ground_riverCornerSmall.glb
20202020 ground_riverCross.glb
0?2?0000 ground_riverEnd.glb
00200000 ground_riverEndClosed.glb
22222222 ground_riverOpen.glb
0?2?0?2? ground_riverRocks.glb
22222?0? ground_riverSide.glb
20202222 ground_riverSideOpen.glb
20202000 ground_riverSplit.glb
00200020 ground_riverStraight.glb
00000000 ground_riverTile.glb`;
export const CLIFF_RULES = getRules`
99999999 cliff_blockCave_rock.glb
99999999 cliff_blockCave_stone.glb
0?3?3?00 cliff_blockDiagonal_rock.glb
0?3?3?00 cliff_blockDiagonal_stone.glb
2?2?2?2? cliff_blockHalf_rock.glb
2?2?2?2? cliff_blockHalf_stone.glb
1?1?1?1? cliff_blockQuarter_rock.glb
1?1?1?1? cliff_blockQuarter_stone.glb
2?2?2?0? cliff_blockSlopeHalfWalls_rock.glb
2?2?2?0? cliff_blockSlopeHalfWalls_stone.glb
3?3?3?0? 3?3?3?2? cliff_blockSlopeWalls_rock.glb
3?3?3?0? cliff_blockSlopeWalls_stone.glb
0?3?0?0? cliff_blockSlope_rock.glb
0?3?0?0? cliff_blockSlope_stone.glb
3?3?3?3? cliff_block_rock.glb
3?3?3?3? cliff_block_stone.glb
0?3?0?0? cliff_cave_rock.glb
0?3?0?0? cliff_cave_stone.glb
0?5?5?0? the l shapes cliff_cornerInnerLarge_rock.glb
0?5?5?0? cliff_cornerInnerLarge_stone.glb
0?3?3?0? 1?3?3?1? 2?3?3?2? cliff_cornerInnerTop_rock.glb
0?3?3?0? 1?3?3?1? 2?3?3?2? cliff_cornerInnerTop_stone.glb
0?4?4?0? cliff_cornerInner_rock.glb
0?4?4?0? cliff_cornerInner_stone.glb
00050000 the corners cliff_cornerLarge_rock.glb
00050000 cliff_cornerLarge_stone.glb
00030000 ??131??? ??232??? ??231??? ??231??? cliff_cornerTop_rock.glb
00030000 ??131??? ??232??? ??231??? ??231??? cliff_cornerTop_stone.glb
00040000 cliff_corner_rock.glb
00040000 cliff_corner_stone.glb
0?4?4?00 cliff_diagonal_rock.glb
0?4?4?00 cliff_diagonal_stone.glb
0?2?2?0? 1?2?2?1? 0?2?2?1? 1?2?2?0? cliff_halfCornerInner_rock.glb
0?2?2?0? 1?2?2?1? 0?2?2?1? 1?2?2?0? cliff_halfCornerInner_stone.glb
00020000 cliff_halfCorner_rock.glb
00020000 cliff_halfCorner_stone.glb
0?2?0??? 1?2?1??? cliff_half_rock.glb
0?2?0??? 1?2?1??? cliff_half_stone.glb
0?5?0??? cliff_large_rock.glb
0?5?0??? cliff_large_stone.glb
0?4?0??? cliff_rock.glb
0?4?0??? cliff_stepsCornerInner_rock.glb
0?333?00 cliff_stepsCornerInner_stone.glb
0?333?00 cliff_stepsCorner_rock.glb
??232??? cliff_stepsCorner_stone.glb
??232??? cliff_steps_rock.glb
03330000 cliff_steps_stone.glb
03330000 cliff_stone.glb
0?4?0000 cliff_topDiagonal_rock.glb
0?3?3?00 cliff_topDiagonal_stone.glb
0?3?3?00 cliff_top_rock.glb
0?3?0000 cliff_top_stone.glb
0?3?0000 1?3?1000 2?3?2000 cliff_waterfallTop_rock.glb
0?6?0000 cliff_waterfallTop_stone.glb
0?6?0000 cliff_waterfall_rock.glb
`;
