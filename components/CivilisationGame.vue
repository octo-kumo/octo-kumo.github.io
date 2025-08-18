<script setup lang="ts">
import {CivilisationZero} from "@/games/civilisation-0";
import type {Ref} from "@vue/reactivity";

let game: CivilisationZero | undefined = undefined;
const game_container: Ref<HTMLElement | undefined> = ref(undefined);
watch(game_container, value => {
  game ??= new CivilisationZero();
  game.attach(value);
});
onMounted(() => {
});
</script>

<template>
  <div id="civilisation-game-parent" ref="game_container"></div>
</template>

<style lang="css" scoped>
#civilisation-game-parent {
  height: 100vh;
}

:deep(#game-dat-gui) {
  position: fixed;
  right: 0;
  bottom: 20px;
}
</style>
