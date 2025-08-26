<script setup lang="ts">
import {type PieceColor, TheChessboard} from 'vue3-chessboard';
import 'vue3-chessboard/style.css';

function endGame(color?: PieceColor) {
  alert('Game Ended');
}
</script>

<template>
  <the-chessboard @stalemate="endGame" @checkmate="endGame"/>
</template>
<style scoped lang="css">
</style>
