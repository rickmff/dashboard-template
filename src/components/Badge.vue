<template>
  <div class="flex items-center gap-x-1 mt-4">
    <span
      :class="['text-' + props.size, { bold: props.bold }]"
      class="bg-grey-90 text-primary font-medium px-2.5 py-0.5 rounded-md"
    >
      {{ label }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  size: {
    type: String as () => 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    required: true
  },
  bold: Boolean
})
</script>
