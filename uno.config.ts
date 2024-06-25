import {defineConfig, presetUno, presetWebFonts, transformerDirectives} from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
        presetWebFonts({
            provider: 'bunny',
            fonts: {
                mono: ['JetBrains Mono'],
            }
        }),
    ],
    transformers: [
        transformerDirectives(),
    ],
})
