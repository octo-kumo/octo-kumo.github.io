<template>
  <section class="hero-section">
    <div class="hello">
      Hello, <span class="wave">👋</span> I am
    </div>
    <div class="tagline">
      <!-- <h1>Coding galaxies, one project at a time.</h1> -->
      <h1 @click="clicks++" ref="tagline" :class="{ 'cursor-pointer': clicks < CLICKS }">
        an aspiring software engineer.
      </h1>
      <h2 :class="{ 'opacity-50': progress > 0.1 }" class="transition-opacity"><ruby>traveler<rt class="opacity-30">{{ pageViews }}th</rt></ruby>, please scroll down</h2>
      <div class="scroll-indicator" :class="{ 'hidden': progress > 0.1 }" @click="emit('navigate', 'about')">
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const CLICKS = 114;
import { PowerGlitch } from 'powerglitch'
const emit = defineEmits<{
  (e: 'navigate', section: string): void
}>();
const clicks = ref(0);
const tagline = ref<HTMLHeadingElement>();
const pageViews = useState<number>('page-views');
defineProps<{
  progress: number;
}>();
watch(clicks, () => {
  if (!tagline.value) return;
  if (clicks.value === CLICKS) {
    PowerGlitch.glitch(tagline.value, {
      playMode: 'manual',
      timing: { easing: "ease-in-out" },
      slice: { count: 20 }
    }).startGlitch();
    setTimeout(() => {
      if (!tagline.value) return;
      tagline.value.innerHTML = '<ruby>Seventh Phase of the Sky<rt>「天空的第七种相态」</rt></ruby>';
      PowerGlitch.glitch(tagline.value, {
        timing: { easing: "ease-in-out", duration: 4000 },
        slice: { count: 2 },
        shake: {
          amplitudeX: 0.05,
          amplitudeY: 0.05
        }
      });
    }, 125);
  } else if (clicks.value < CLICKS) {
    PowerGlitch.glitch(tagline.value, {
      playMode: 'manual',
      timing: { easing: "ease-in-out" },
      slice: { count: 10 * clicks.value / CLICKS },
      shake: {
        amplitudeX: 0.5 * (clicks.value / CLICKS),
        amplitudeY: 0.5 * (clicks.value / CLICKS)
      }
    }).startGlitch();
  }
});
</script>

<style scoped>
.hello {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 2rem;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
}

.hero-section {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.tagline {
  user-select: none;
  position: absolute;
  bottom: 50px;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  color: #fff;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);

  & h1 {
    font-size: 2rem;
    margin-bottom: 0;
  }

  & h2 {
    font-size: 1.5rem;
  }
}

.scroll-indicator {
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  transition: opacity 0.3s ease-in-out;

  &.hidden {
    opacity: 0;
  }
}

.chevron {
  width: 20px;
  height: 20px;
  border: 2px solid;
  border-color: transparent transparent var(--base-color) transparent;
  transform: rotate(45deg);
  position: absolute;
  opacity: 0;
  animation: scroll-pulse 2s infinite;
}

.chevron:nth-child(1) {
  animation-delay: 0s;
  border-color: transparent transparent color-mix(in srgb, var(--base-color) 50%, transparent) transparent;
}

.chevron:nth-child(2) {
  animation-delay: 0.15s;
  margin-top: 10px;
  border-color: transparent transparent color-mix(in srgb, var(--base-color) 75%, transparent) transparent;
}

.chevron:nth-child(3) {
  animation-delay: 0.3s;
  margin-top: 20px;
  border-color: transparent transparent var(--base-color) transparent;
}

@keyframes scroll-pulse {
  0% {
    opacity: 0;
    transform: rotate(45deg) translateY(-10px) scale(0.9);
  }

  50% {
    opacity: 1;
    transform: rotate(45deg) translateY(0) scale(1);
  }

  100% {
    opacity: 0;
    transform: rotate(45deg) translateY(10px) scale(0.9);
  }
}

.glitch {
  position: relative;
  display: inline-block;
  animation: glitch 1s infinite;
}
</style>