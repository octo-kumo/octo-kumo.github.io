// provide tools based on the system arch
import { join } from 'path';
const arch = process.arch;
const tools = ['minify', 'oxipng'] as const;
const archs = ['x64', 'arm64'] as const;

const path = import.meta.dirname;

export default function getTool(tool: typeof tools[number]): string {
    if (!tools.includes(tool)) throw new Error(`Tool ${tool} is not supported`);
    if (!archs.includes(arch as typeof archs[number])) throw new Error(`Arch ${arch} is not supported`);
    return join(path, 'tools', `${tool}-${arch}`);
}