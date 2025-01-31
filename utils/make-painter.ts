import type { Ref } from "@vue/reactivity";

export default async function (canvas: HTMLCanvasElement & { clear?: () => void }, stroke: Ref<number>, erase: Ref<boolean>) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let flag = false,
        prevX = 0,
        currX = 0,
        prevY = 0,
        currY = 0;
    canvas.clear = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    function draw() {
        if (!ctx) return;
        ctx.beginPath();
        if (erase.value) {
            ctx.globalCompositeOperation = "destination-out";
            ctx.arc(prevX, prevY, stroke.value, 0, Math.PI * 2, false);
            ctx.fill();
        } else {
            ctx.globalCompositeOperation = "source-over";
            ctx.arc(prevX, prevY, stroke.value / 2, 0, Math.PI * 2, false);
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(currX, currY);
            ctx.lineWidth = stroke.value;
            ctx.strokeStyle = "white";
            ctx.stroke();
        }
    }

    function getxy(e: MouseEvent) {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left; //x position within the element.
        const y = e.clientY - rect.top;  //y position within the element.
        return [x, y];
    }

    function findxy(res: 'down' | 'up' | 'out' | 'move', e: MouseEvent) {
        if (res == 'down') {
            prevX = currX;
            prevY = currY;
            [currX, currY] = getxy(e);

            flag = true;
        }
        if (res == 'up' || res == "out") {
            flag = false;
        }
        if (res == 'move') {
            if (flag) {
                prevX = currX;
                prevY = currY;
                [currX, currY] = getxy(e);
                draw();
            }
        }
    }

    canvas.addEventListener("mousemove", e => findxy('move', e), false);
    canvas.addEventListener("mousedown", e => findxy('down', e), false);
    canvas.addEventListener("mouseup", e => findxy('up', e), false);
    canvas.addEventListener("mouseout", e => findxy('out', e), false);
}
