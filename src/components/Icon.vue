<template>
  <component :is="" role="img" >
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String as () => 'sm' | 'md' | 'lg',
    default: 'md',
    required: false
  }
})
</script>
