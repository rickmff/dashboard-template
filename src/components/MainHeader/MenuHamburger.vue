<template>
  <img
    src="@/assets/icons/menu-close.svg"
    class="w-8 h-8 cursor-pointer active:transform active:scale-[0.99]"
    :class="{ 'transform scale-x-[-1]': !isOpen }"
    alt="Menu close icon"
    @click="toggleOpen"
  />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const emits = defineEmits(['toggle-nav'])

const isOpen = ref<boolean>(true)

const toggleOpen = () => {
  isOpen.value = !isOpen.value
  emits('toggle-nav', isOpen.value)
}

onMounted(() => emits('toggle-nav', isOpen.value))
</script>
