<script setup lang="ts">
import {AirDefence} from "@/games/air-defence";
import type {Ref} from "@vue/reactivity";

const game_container: Ref<HTMLElement | undefined> = ref(undefined);
watch(game_container, value => {
  const game = new AirDefence();
  game.attach(value);
});
onMounted(() => {
});
</script>

<template>
  <div id="air-defence-game-parent" ref="game_container"></div>
</template>

<style scoped lang="css">
#air-defence-game-parent {
  height: 100vh;
}

:deep(#game-dat-gui) {
  position: fixed;
  right: 0;
  bottom: 20px;
}
</style>
