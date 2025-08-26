import {ADDITION, type Brush, Evaluator} from "three-bvh-csg";

const evaluator = new Evaluator();
onmessage = function (e: MessageEvent<Brush[]>) {
    try {
        let data = e.data;
        if (!Array.isArray(data)) throw "Invalid data";
        let res = data[0]
        for (let i = 1; i < data.length; i++) {
            res = evaluator.evaluate(res, data[i], ADDITION);
        }
        postMessage(res);
    } catch (e) {
        postMessage(e);
    }
}
