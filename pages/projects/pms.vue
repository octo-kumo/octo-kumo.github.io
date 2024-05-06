<script setup lang="ts">
import type {UnwrapNestedRefs} from "@vue/reactivity";

definePageMeta({
  layout: 'clean'
});
const packages: UnwrapNestedRefs<{ [k: string]: 'mail' | 'package' | 'both' }> = reactive({
  '403': 'mail',
  '1203': 'package',
  '1234': 'both',
  '1201': 'package',
  '502': 'package',
  '703': 'mail',
  '905': 'package',
  '507': 'package'
})

function addEvent() {
  packages[Math.round(Math.random() * 15 + 1) + '0' + Math.round(Math.random() * 9 + 1)] = "mail";
}
</script>

<template>
  <v-app>
    <NuxtLoadingIndicator/>
    <v-main>
      <v-container>
        <v-row class="p-5">
          <v-col cols="12" lg="3" md="4" sm="6" v-for="(status, room) in packages">
            <v-card :elevation="10" :rounded="100" variant="tonal" class="relative">
              <v-card-title class="text-h1 text-center" v-text="room"
                            style="line-height: unset">
              </v-card-title>
              <v-btn class="position-absolute right-0 top-0" icon @click="" variant="plain" size="small">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-btn variant="flat" color="rgb(31 41 55 / 1)" block size="large"
                     class="text-h4 text-white text-uppercase rounded-t-0">
                <v-icon v-if="status==='mail'">mdi-email-outline</v-icon>
                <v-icon v-if="status==='package'">mdi-package-variant-closed</v-icon>
                {{ status }}
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-hover>
      <template v-slot:default=" { isHovering, props }">
        <v-btn v-bind="props" icon="mdi-plus" id="fab" @click="addEvent"
               class="position-fixed right-4 bottom-4 z-10 transition-all"
               color="black" :variant="isHovering?'flat':'outlined'"
               :class="[`elevation-${isHovering?10:0}`]"/>
      </template>
    </v-hover>
  </v-app>
</template>

<style scoped lang="css">
</style>
