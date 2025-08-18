<template>
    <div class="relative overflow-hidden">
        <div ref="carousel" class="flex whitespace-nowrap overflow-x-scroll overflow-y-hidden" :class="{
            'justify-center': childrenCount <= 1
        }" @wheel="onWheel">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
const carousel = useTemplateRef('carousel');
const slots = useSlots();
const childrenCount = computed<number>(() => {
    return Number(slots.default ? (slots.default()[0]?.children?.length ?? 0) : 0);
});
const tileWidth = computed(() => {
    if (!carousel.value) return 0;
    const xs = Array.from(carousel.value.children).map(c => (c as any).offsetLeft ?? 0);
    const diffs = xs.slice(1).map((x, i) => x - xs[i]);
    const mean = diffs.reduce((a, b) => a + b, 0) / diffs.length;
    return mean;
});
let targetPosition = 0;
let scrollFrame: number | null = null;

function approach() {
    if (!carousel.value) return;
    scrollFrame = null;
    if (targetPosition === -1) return;
    targetPosition = Math.min(Math.max(targetPosition, 0), carousel.value.scrollWidth - carousel.value.clientWidth);
    if (Math.abs(targetPosition - carousel.value.scrollLeft) < 1) {
        targetPosition = -1;
        return;
    }
    carousel.value.scrollLeft = (targetPosition + carousel.value.scrollLeft * 2) / 3;
    scrollFrame = requestAnimationFrame(approach);
}
const onWheel = (e: WheelEvent) => {
    e.preventDefault();
    const delta = 0.5 * ((e.deltaY || e.detail || (e as any).wheelDelta) > 0 ? tileWidth.value : 0 - tileWidth.value);
    if (carousel.value && childrenCount.value > 1) {
        targetPosition = Math.min(Math.max(carousel.value.scrollLeft + delta, 0), carousel.value.scrollWidth - carousel.value.clientWidth);
        const d = targetPosition % tileWidth.value;
        const dist = d > tileWidth.value / 2 ? tileWidth.value - d : d;
        if (Math.abs(dist) < delta / 4) {
            targetPosition = Math.round(targetPosition / tileWidth.value) * tileWidth.value;
        }

        if (scrollFrame === null && typeof requestAnimationFrame !== 'undefined') scrollFrame = requestAnimationFrame(approach);
    }
};
watch(
    () => childrenCount.value,
    (newCount: number) => {
        if (newCount > 1) {
            targetPosition = 0;
            if (scrollFrame === null && typeof requestAnimationFrame !== 'undefined') scrollFrame = requestAnimationFrame(approach);
        } else if (carousel.value) {
            carousel.value.classList.add('justify-center');
            carousel.value.style.overflow = 'hidden';
        }
    },
    { immediate: true }
);
</script>

<!-- Tailwind is used for styling, so no additional scoped styles are required -->