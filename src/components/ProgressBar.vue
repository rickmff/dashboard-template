<template>
  <div class="flex items-center gap-2 w-full">
    <p class="bold text-xs min-w-fit">{{ props.progress }}% concluído</p>
    <div class="w-full bg-grey-95 rounded-full h-1.5">
      <div
        class="bg-primary-light h-1.5 rounded-full transform-gpu transition-all"
        :style="{ width: `${props.progress}%` }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  progress: Number
})
</script>
