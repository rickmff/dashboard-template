<template>
  <div
    class="relative
           flex
           items-center
           gap-x-4
           w-1/3
           p-2
           rounded-xl
           ring-1
           ring-grey-95
           cursor-pointer
           transition-transform
           transform-gpu
           active:scale-[0.99]"
    @click="props.handler"
  >
    <div
      class="flex items-center justify-center h-10 w-10 rounded-full bg-grey-90 hover:bg-grey-95"
    >
      <img :src="props.iconPath" alt="Ícone de apoio" />
    </div>
    <div>
      <h5 class="text-primary text-xxs">{{ props.label }}</h5>
      <p class="text-grey-80 text-xs">{{ props.value }}</p>
    </div>
    <img
      class="absolute right-6"
      v-if="props.link"
      src="@/assets/icons/chevron-right-dark.svg"
      alt="Ícone de ação"
    />
    <img
      class="absolute right-6"
      v-if="props.handler"
      src="@/assets/icons/copy.svg"
      alt="Ícone de ação"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  iconPath: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: false
  },
  handler: {
    type: Function,
    required: false
  }
})
</script>
