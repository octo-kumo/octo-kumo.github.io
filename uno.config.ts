import { defineConfig, presetWebFonts, transformerDirectives } from 'unocss'
import presetWind3 from '@unocss/preset-wind3'

export default defineConfig({
    presets: [
        presetWind3(),
        presetWebFonts({
            provider: 'bunny',
            fonts: {
                sans: 'Space Grotesk',
                mono: ['JetBrains Mono'],
            }
        }),
    ],
    transformers: [
        transformerDirectives(),
    ],
})
