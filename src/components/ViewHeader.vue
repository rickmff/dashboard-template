<template>
  <div class="w-full p-4 bg-white border-b border-grey-90 z-10">
    <div class="flex items-center gap-x-4 justify-between">
      <div class="flex space-x-4 px-3">
        <RouterLink :to="props.backToUrl">
          <div
            class="flex items-center justify-center h-8 w-8 rounded-full bg-grey-90 hover:bg-grey-95"
          >
            <img
              class="inline-block cursor-pointer transition-transform transform active:scale-90"
              src="@/assets/icons/arrow_back.svg"
              alt="Botão voltar"
            />
          </div>
        </RouterLink>
        <h1 class="text-grey-10 medium">{{ props.title }}</h1>
      </div>
      <a-breadcrumb separator=">" class="sm:pr-10">
        <a-breadcrumb-item v-for="path in breadcrumbs" :key="path.to">
          <router-link :to="path.to">
            {{ path.label }}
          </router-link>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  backToUrl: {
    type: String,
    required: true
  }
})

const route = useRoute()

const breadcrumbs = computed(() => {
  const matched = route.matched

  const adjustedBreadcrumbs = matched.map((route) => {
    if (route.name === 'Editar Meu Perfil') {
      return {
        to: '/meu-perfil',
        label: 'Meu Perfil'
      }
    } else {
      return {
        to: route.path,
        label: route.name || 'Inicio'
      }
    }
  })

  return adjustedBreadcrumbs.filter((crumb) => crumb.label)
})
</script>
