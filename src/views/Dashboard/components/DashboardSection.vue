<template>
  <div class="w-full flex items-center justify-between py-3 border-b border-grey-95">
    <h3 class="text-md text-grey-10">
      {{ title }}
    </h3>

    <RouterLink
      class="flex items-center gap-2 transition-transform transform active:scale-[0.99]"
      :to="routerLink.route ?? ''"
      @click="routerLink.handler"
    >
      <img
        v-if="routerLink.icon && routerLink.icon.slot === 'start'"
        :src="routerLink.icon?.path"
        alt="Ícone do link"
      />

      <span class="text-xs text-primary-dark">
        {{ routerLink.label }}
      </span>

      <img
        v-if="routerLink.icon && routerLink.icon.slot === 'end'"
        :src="routerLink.icon?.path"
        alt="Ícone do link"
      />
    </RouterLink>
  </div>

  <div class="py-4">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { SectionLink } from '@/views/Dashboard/models/section-link.interface'

defineProps({
  title: String,
  routerLink: {
    type: Object as PropType<SectionLink>,
    required: true
  }
})
</script>
