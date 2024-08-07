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
        <span v-if="doc?.rank" class="tag">
            <svg viewBox="0 0 1024 1024">
                <path fill="currentColor"
                    d="M480 896V702.08A256.256 256.256 0 0 1 264.064 512h-32.64a96 96 0 0 1-91.968-68.416L93.632 290.88a76.8 76.8 0 0 1 73.6-98.88H256V96a32 32 0 0 1 32-32h448a32 32 0 0 1 32 32v96h88.768a76.8 76.8 0 0 1 73.6 98.88L884.48 443.52A96 96 0 0 1 792.576 512h-32.64A256.256 256.256 0 0 1 544 702.08V896h128a32 32 0 1 1 0 64H352a32 32 0 1 1 0-64zm224-448V128H320v320a192 192 0 1 0 384 0m64 0h24.576a32 32 0 0 0 30.656-22.784l45.824-152.768A12.8 12.8 0 0 0 856.768 256H768zm-512 0V256h-88.768a12.8 12.8 0 0 0-12.288 16.448l45.824 152.768A32 32 0 0 0 231.424 448z">
                </path>
            </svg>&nbsp;{{ doc?.rank }}
        </span>
        <span v-if="doc?.solves" class="tag">{{ doc?.solves }} solves</span>
        <span v-if="doc?.points" class="tag">{{ doc?.points }} points</span>
    </div>
    <style>
        .tag {
            color: white;
            border: 1px solid white;
            border-radius: 5px;
            padding: 5px;
            margin: 5px;
        }
    </style>
</template>
