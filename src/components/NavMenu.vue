<script setup lang="ts">
defineProps({
  links: Array,
});
</script>
<template>
  <div>
    <div :key="link.name" v-for="link in links">
      <img :src="link.icon" v-if="link.icon" :alt="link.name"/>
      <router-link class="router popup" active-class="router-active" :to="link.link">{{ link.name }}</router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.router {

}

.router-active {

}
</style>
