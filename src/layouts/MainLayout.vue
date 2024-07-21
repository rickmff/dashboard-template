<template>
  <MainNav @toggle-nav="onToggleNav" />
  <main
    class="pl-64 pt-20 transition-all duration-500 ease-in-out"
    :class="{ '!pl-0': !isNavOpen }"
  >
    <router-view v-slot="{ Component }">
      <Transition name="slide-in" mode="out-in"> <component :is="Component" /> </Transition>
    </router-view>
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainNav from '@/components/MainNav/MainNav.vue'
import { ref } from 'vue'

const isNavOpen = ref<boolean>(true)

const onToggleNav = (payload: boolean) => {
  isNavOpen.value = payload
}
</script>

<style scoped>
@import '@/styles/animations/slide-in.scss';
</style>
