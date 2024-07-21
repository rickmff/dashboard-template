<template>
  <div class="relative w-2/4">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <img :src="iconSearch" />
    </div>
    <input
      type="text"
      id="search-navbar"
      class="block
       w-full
       h-12
       p-2
       pl-10
       text-xs
       rounded-xl
       placeholder-white
       bg-primary-lighten
       hover:ring-1
       ring-white
       transition-shadow
       focus:bg-white
       focus:outline-none"
      placeholder="Buscar vaga"
      @focus="onFocusInput(true)"
      @blur="onFocusInput(false)"
    />
    <div class="absolute inset-y-0 right-3 flex items-center pl-3 cursor-pointer" @click="filterClicked">
      <img :src="iconFilter" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const emits = defineEmits(['filter-clicked'])

const isFocused = ref(false)

const onFocusInput = (focus: boolean) => {
  isFocused.value = focus
}

const iconSearch = computed(() => {
  return isFocused.value ? 'src/assets/icons/search-active.svg' : 'src/assets/icons/search.svg'
})

const iconFilter = computed(() => {
  return isFocused.value ? 'src/assets/icons/filter-dark.svg' : 'src/assets/icons/filter.svg'
})

const filterClicked = () => emits('filter-clicked', true)
</script>
