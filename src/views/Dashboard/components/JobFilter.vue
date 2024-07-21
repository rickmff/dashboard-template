<template>
  <div
    class="w-2/12
           h-20
           px-4
           py-3
           flex
           flex-col
           justify-between
           rounded-xl
           bg-white
           transform
           ring-1
           ring-grey-90
           hover:ring-2
           active:scale-[0.99]
           transition-all
           cursor-pointer"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div class="w-full flex items-center justify-end">
      <img
        :src="isHover ? filterOption.iconPath.hover : filterOption.iconPath.default"
        alt="Ícone do filtro"
      />
    </div>
    <p
      class="w-full flex items-center justify-start text-grey-30"
      :class="{ 'text-primary': isHover }"
    >
      {{ filterOption.label }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { JobFilterOption } from '@/views/Dashboard/models/job-filter-options.interface'
import type { PropType } from 'vue'
import { ref } from 'vue'

const props = defineProps({
  filterOption: {
    type: Object as PropType<JobFilterOption>,
    required: true
  }
})

const isHover = ref(false)

const onMouseEnter = () => {
  isHover.value = true
}

const onMouseLeave = () => {
  isHover.value = false
}
</script>
