import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        content: defineCollection({
            type: 'page',
            source: {
                include: '**/*.md',
                exclude: [
                    '**/node_modules/**',
                    '**/.DS_Store',
                    '**/.obsidian/**',
                    '**/.idea/**',
                    '**/.venv/**',
                    '**/.vscode/**',
                    '**/__pycache__/**',
                    '**/.trash/**',
                    '**/templates/**',
                    '**/.smart-connections',
                    '**/.smart-env'
                ]
            },
            schema: z.object({
                created: z.date(),
                updated: z.date(),
                title: z.string().optional(),
                description: z.string().optional(),
                tags: z.array(z.string()).optional(),
                _tags: z.array(z.string()).optional(),
                solves: z.number().optional(),
                points: z.number().optional(),
                rank: z.number().optional(),
                team: z.string().optional(),
                readingTime: z.object({
                    text: z.string(),
                    minutes: z.number(),
                    time: z.number(),
                    words: z.number()
                }),
                excerpt: z.object({
                    type: z.string(),
                    children: z.any(),
                }).optional(),
                percent: z.number().optional(),
                challenges: z.number().optional(),
            })
        })
    }
})