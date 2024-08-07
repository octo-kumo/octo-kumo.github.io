<template>
  <!-- <div class="fixed right-0 bottom-0">
    Is PWA installed? {{ $pwa?.isPWAInstalled }}
    <el-button v-if="!$pwa?.isPWAInstalled" @click="$pwa?.install()">Install PWA</el-button>
  </div> -->
</template>

<script lang="ts" setup>
const { $pwa } = useNuxtApp()
onMounted(() => {
  if ($pwa?.offlineReady) {
    ElMessage({
      message: 'App ready to work offline',
      type: 'success',
    });
  }
});
// watch(() => $pwa?.needRefresh, (newVal) => {
//   if (newVal) {
//     ElMessageBox.confirm('New content available, do you want to refresh?', 'New content available', {
//       confirmButtonText: 'Refresh',
//       cancelButtonText: 'Cancel',
//       type: 'info',
//     }).then(() => {
//       $pwa?.updateServiceWorker();
//     });
//   }
// });
</script>

<style></style>