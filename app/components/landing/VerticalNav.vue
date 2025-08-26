<template>
  <nav class="vertical-nav hidden md:block fade-in">
    <ul>
      <li class="nav-item pointer-events-auto"
        :class="{ 'active': Math.floor(0.5 + (progress) * (sections.length - 1)) == i }" v-for="section, i in sections"
        :key="section.key" @click="emit('navigate', section.key)">
        <span>{{ section.icon }}</span>
        <span class="hidden lg:inline fade-in">{{ section.title }}</span>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'navigate', section: string): void
}>();
defineProps<{
  progress: number;
  sections: {
    key: string,
    value: Ref,
    title: string,
    icon: string
  }[]
}>()
</script>
<style scoped>
.vertical-nav {
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  pointer-events: none;
}


.vertical-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.vertical-nav li {
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 24px;
}

.nav-item {
  transition: opacity 0.3s ease-in-out;
  opacity: 0.3;

  &:hover {
    opacity: 1;
  }

  &.active {
    opacity: 1;
  }
}
</style>