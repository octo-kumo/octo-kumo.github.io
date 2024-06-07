<script setup lang="ts">
import {type PieceColor, TheChessboard} from 'vue3-chessboard';
import 'vue3-chessboard/style.css';

function endGame(color?: PieceColor) {
  alert('Stalemate');
}
</script>

<template>
  <TheChessboard @stalemate="endGame" @checkmate="endGame"/>
</template>
<style scoped lang="css">

</style>
