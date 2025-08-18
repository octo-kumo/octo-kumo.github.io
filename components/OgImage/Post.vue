<script setup lang="ts">
defineOptions({
    inheritAttrs: false,
});

const props = defineProps({
    path: String,
    title: {
        type: String,
        default: 'Blog',
    },
    description: {
        type: String,
        default: 'No description provided',
    },
    color: {
        type: String,
    },
    doc: {
        type: Object,
        required: false,
    },
    padding: {
        type: String,
        default: '0 50px',
    },
    titleFontSize: {
        type: String,
        default: '50px',
    },
    descriptionFontSize: {
        type: String,
        default: '35px',
    },
    icon: {
        type: [String, Boolean],
        default: 'logos:nuxt',
    },
    image: {
        type: String,
        required: false,
    },
    siteName: {
        type: String,
        required: false,
    },
    siteLogo: {
        type: String,
        required: false,
    },
    readingMins: {
        type: Number,
        required: false,
    },
})
const background = computed(() => {
    // we want to make a
    // const isBackgroundTw = props.background?.startsWith('bg-')
    const cubeTop = '#1d3043';
    const cubeLeft = '#000';
    const cubeRight = '#18222c'

    return {
        display: 'flex',
        position: 'absolute',
        right: '-50%',
        top: '0%',
        width: '100%',
        height: '100%',
        backgroundSize: '80px 140px',
        backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px',
        backgroundColor: cubeRight,
        backgroundImage: `linear-gradient(30deg, ${cubeTop} 12%, transparent 12.5%, transparent 87%, ${cubeTop} 87.5%, ${cubeTop}),linear-gradient(150deg, ${cubeTop} 12%, transparent 12.5%, transparent 87%, ${cubeTop} 87.5%, ${cubeTop}),linear-gradient(30deg, ${cubeTop} 12%, transparent 12.5%, transparent 87%, ${cubeTop} 87.5%, ${cubeTop}),linear-gradient(150deg, ${cubeTop} 12%, transparent 12.5%, transparent 87%, ${cubeTop} 87.5%, ${cubeTop}),linear-gradient(60deg, ${cubeLeft} 25%, transparent 25.5%, transparent 75%, ${cubeLeft} 75%, ${cubeLeft}),linear-gradient(60deg, ${cubeLeft} 25%, transparent 25.5%, transparent 75%, ${cubeLeft} 75%, ${cubeLeft})`,
    }
})

const siteConfig = useSiteConfig()
const siteName = computed(() => {
    return props.siteName || siteConfig.name
})
const siteLogo = computed(() => {
    return props.siteLogo || siteConfig.logo || '/logo.png'
})
</script>

<template>
    <div class='bg-black w-full h-full absolute' />
    <div :style="background" />
    <div class="w-full flex flex-row z-10">
        <div class="flex-1" style="padding: 50px;">
            <div class="flex flex-col h-full justify-between text-gray-100">
                <div class="flex flex-row justify-between items-center">
                    <div class="flex flex-col">
                        <div class="flex flex-row gap-1">
                            <span class="color-blue font-bold">{{ getCtfCategory(doc) }}</span>
                            <span v-for="tag in (doc?.tags ?? [])" class="color-gray">#{{ tag }}</span>
                        </div>
                        <div class="color-gray text-sm">
                            {{ displayDocDates(doc) }}
                        </div>
                        <div class="text-5xl leading-relaxed mb-2 font-mono font-bold">
                            {{ guessArticleTitle(doc) }}
                        </div>
                        <div v-if="description" class="text-2xl">
                            {{ description }}
                        </div>
                        <div class="text-2xl" v-if="readingMins">
                            {{ readingMins }} min read
                        </div>
                    </div>
                </div>
                <div class="text-white w-full flex flex-row">
                    <img v-if="siteLogo" :src="siteLogo" height="50" class="rounded mr-5">
                    <div style="font-size: 30px;" class="font-bold mt-2">
                        {{ siteName }}
                    </div>
                </div>
            </div>
        </div>
        <div class="items-end justify-center">
            <img v-if="image" :src="image" height="630" width="630" style="object-fit: cover;"
                class="rounded-xl max-w-full">
        </div>
    </div>
    <div class="absolute bottom-0 right-0 flex flex-col items-end">
        <span v-if="doc?.rank" class="tag">🏆 {{ doc?.rank }}</span>
        <span v-if="doc?.solves" class="tag">{{ doc?.solves }} solves</span>
        <span v-if="doc?.points" class="tag">{{ doc?.points }} points</span>
    </div>
    <style>
        .tag {
            background-color: #0006;
            color: white;
            border: 1px solid white;
            border-radius: 5px;
            padding: 5px;
            margin: 5px;
        }
    </style>
</template>
