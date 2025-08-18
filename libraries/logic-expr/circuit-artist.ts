// Define the Node type
export interface CircuitNode {
    label?: string;
    input: CircuitNode[];
    type: 'and' | 'or' | 'in' | 'out' | 'not' | 'xor'; // 'and', 'or', 'not', 'xor', etc.
}

// Main function to draw the circuit
export function drawCircuit(canvas: HTMLCanvasElement, outputs: CircuitNode[]) {
    const ctx = canvas.getContext("2d")!;
    const nodePositions: Map<CircuitNode, { x: number, y: number }> = new Map(); // Store positions of each node
    const { layers, nodeDepths } = groupNodesIntoLayers(outputs);

    orderLayers(layers, nodeDepths);
    assignPositions(layers, canvas, nodePositions);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'white';
    ctx.font = '12px sans-serif';
    ctx.fillRect(0, 0, canvas.width / 2, canvas.height / 2);
    drawNodes(ctx, nodePositions);
    drawWires(ctx, nodePositions, ctx.canvas.width);
}

// Helper function: Group nodes into meta-layers
function groupNodesIntoLayers(outputs: CircuitNode[]): { layers: CircuitNode[][], nodeDepths: Map<CircuitNode, number> } {
    const layers: CircuitNode[][] = [];
    const nodeDepths = new Map<CircuitNode, number>();  // Track minimum depth for each node
    const visited = new Set<CircuitNode>();

    const dfs = (node: CircuitNode): number => {
        if (visited.has(node)) return nodeDepths.get(node)!;

        visited.add(node);

        // Depth of this node is 1 + max depth of its inputs
        let maxInputDepth = 0;
        node.input.forEach(inputNode => {
            const inputDepth = dfs(inputNode);
            maxInputDepth = Math.max(maxInputDepth, inputDepth);
        });

        const depth = maxInputDepth + 1; // Set the depth for this node
        nodeDepths.set(node, depth);

        if (!layers[depth]) {
            layers[depth] = [];
        }
        layers[depth].push(node);

        return depth;
    };

    // Start grouping from the output nodes
    outputs.forEach(outputNode => {
        dfs(outputNode);
    });

    return { layers, nodeDepths };
}

// Helper function: Order nodes in each layer
function orderLayers(layers: CircuitNode[][], nodeDepths: Map<CircuitNode, number>) {
    layers.forEach((layer, i) => {
        // Sort by some heuristic (e.g., label or topological ordering)
        layer.sort((a, b) => {
            return (a.label?.localeCompare(b.label!) || 0) + nodeDepths.get(a)! - nodeDepths.get(b)!;
        });
    });
}

// Helper function: Assign positions for nodes in each layer
function assignPositions(layers: CircuitNode[][], canvas: HTMLCanvasElement, nodePositions: Map<CircuitNode, { x: number, y: number }>) {
    const layerHeight = canvas.height / layers.length;
    layers.forEach((layer, i) => {
        const nodeWidth = canvas.width / (layer.length + 1);
        layer.forEach((node, j) => {
            nodePositions.set(node, {
                x: (j + 1) * nodeWidth,
                y: (i + 1) * layerHeight
            });
        });
    });
}

// Helper function: Draw the nodes and gates
function drawNodes(ctx: CanvasRenderingContext2D, nodePositions: Map<CircuitNode, { x: number, y: number }>) {
    nodePositions.forEach((pos, node) => {
        ctx.beginPath();
        ctx.rect(pos.x - 20, pos.y - 20, 40, 40); // Draw a box for the node
        ctx.stroke();

        ctx.fillText(node.label || node.type, pos.x - 10, pos.y);
    });
}

// Helper function: Draw the zigzag wires between nodes with unique x-values for vertical segments
function drawWires(ctx: CanvasRenderingContext2D, nodePositions: Map<CircuitNode, { x: number, y: number }>, canvasWidth: number) {
    const turningPoints: WireSegment[] = [];

    nodePositions.forEach((pos, node) => {
        node.input.forEach(inputNode => {
            const inputPos = nodePositions.get(inputNode)!;

            // Calculate the turning x value for this wire
            const turningX = getUniqueTurningX(turningPoints, inputPos.y, pos.y, canvasWidth);

            // Store the new wire segment
            turningPoints.push({
                start: { x: turningX, y: Math.min(inputPos.y, pos.y) },
                end: { x: turningX, y: Math.max(inputPos.y, pos.y) }
            });

            // Draw the wire
            ctx.beginPath();
            ctx.moveTo(inputPos.x, inputPos.y);  // Start at input node
            ctx.lineTo(turningX, inputPos.y);    // Move horizontally to the turning point
            ctx.lineTo(turningX, pos.y);         // Move vertically at the unique x value
            ctx.lineTo(pos.x, pos.y);            // Move horizontally to the destination node
            ctx.stroke();
        });
    });
}

// Helper function to calculate a unique turning X value
function getUniqueTurningX(wireSegments: WireSegment[], startY: number, endY: number, canvasWidth: number): number {
    const minY = Math.min(startY, endY);
    const maxY = Math.max(startY, endY);

    let x = 100; // Start from an arbitrary x value (e.g., 100 pixels)
    const step = 5; // Distance between turning points (you can adjust this)

    // Find a unique x where the vertical segment doesn't intersect other wires
    while (wireSegments.some(segment => {
        const segMinY = segment.start.y;
        const segMaxY = segment.end.y;
        return Math.abs(segMinY - maxY) < 5 || Math.abs(segMaxY - minY) < 5; // Check for vertical overlap
    })) {
        x += step;
        if (x >= canvasWidth - 50) {
            x = 100; // Wrap around if we go out of the canvas bounds
        }
    }

    return x;
}

interface WireSegment {
    start: { x: number, y: number };
    end: { x: number, y: number };
}
