<template>
  <div class="w-full h-screen overflow-hidden relative marquee-container">
    <div v-for="(row, index) in rows" :key="index" class="absolute left-0 pointer-events-none marquee-row flex flex-row"
      :class="{ 'reverse': index % 2 !== 0, 'paused': pausedRows[index] }" :style="{
        '--angle': `-${props.angle}deg`,
        '--duration': `${props.duration}s`,
        top: `${index * props.rowHeight - (rows * props.rowHeight) / 2}px`,
      }" @mouseenter="pauseAnimation(index)" @mouseleave="resumeAnimation(index)">
      <div class="flex space-x-8 mr-8" v-for="i in 2">
        <span v-for="(word, wordIndex) in getWords(index, index == Math.floor(rows / 2))" :key="wordIndex"
          @click="emits('word-click', word)"
          class="text-2xl opacity-10 transition-opacity duration-300 hover:opacity-100 pointer-events-auto cursor-pointer text-nowrap"
          :class="{
            'opacity-50': index == Math.floor(rows / 2) && !props.selected.includes(word.toLowerCase()),
            'opacity-100': props.selected.includes(word.toLowerCase())
          }">
          {{ word }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  words: string[]
  duration?: number
  rowHeight?: number
  angle?: number
  selected?: string[]
}

const emits = defineEmits<{
  (e: 'word-click', word: string): void
}>();

const props = withDefaults(defineProps<Props>(), {
  duration: 20,
  rowHeight: 60,
  angle: 30,
  selected: () => []
})

const pausedRows = ref<boolean[]>([])
const rows = ref<number>(0)
const words: string[][] = []
const verticalSpace = ref<number>(0)

function calculateRows() {
  const angle = props.angle * Math.PI / 180
  verticalSpace.value = props.rowHeight / Math.cos(angle)
  rows.value = Math.ceil(1.3 * window.innerHeight / verticalSpace.value)
}

function getWords(index: number, center: boolean) {
  if (words[index]) return words[index];
  if (center) {
    words[index] = [...new Set(props.words)].sort(() => Math.random() - 0.5).map(w => w.toUpperCase());
  }
  if (!center) {
    const selection: string[] = [];
    while (selection.length < 20) {
      const word = props.words[Math.floor(Math.random() * props.words.length)]
      if (!selection.includes(word)) {
        selection.push(word)
      }
    }
    words[index] = selection.map(w => w.toUpperCase());
  }
  // words[index] = Array.from({length: 10}, () =>0).map((_,i)=>i)
  return words[index]
}

function pauseAnimation(index: number) {
  pausedRows.value[index] = true
}

function resumeAnimation(index: number) {
  pausedRows.value[index] = false
}

onMounted(() => {
  calculateRows()
  window.addEventListener('resize', calculateRows)
})

onUnmounted(() => {
  window.removeEventListener('resize', calculateRows)
})
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(70vh) translate3d(0%, 0, 0);
  }

  100% {
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(70vh) translate3d(50%, 0, 0);
  }
}

.marquee-row {
  animation: marquee var(--duration) linear infinite;
  user-select: none;
  text-align: center;
}

.marquee-row.reverse {
  animation-direction: reverse;
}

.marquee-row.paused {
  animation-play-state: paused;
}
</style>