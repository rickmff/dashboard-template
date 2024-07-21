<template>
  <div
    class="w-90% m-6 px-6 h-16 flex items-center gap-10 rounded-xl ring-2 ring-gray-200 bg-grey-90 cursor-pointer transition-transform transform active:scale-[0.99]"
  >
    <img src="@/assets/icons/person-dark.svg" alt="Ícone de usuário" />
    <h5 class="bold min-w-fit">
      Complete seu perfil
      <span class="inline-block relative -top-2 w-2 h-2 rounded-full bg-danger-light"></span>
    </h5>
    <p class="min-w-fit">E aumente suas chances de conquistar uma vaga.</p>
    <ProgressBar :progress="progress" />
    <img src="@/assets/icons/chevron-right-dark.svg" alt="Ícone de ação" />
  </div>
</template>

<script setup lang="ts">
import ProgressBar from '@/components/ProgressBar.vue'
import { onMounted, ref } from 'vue'

const progress = ref(0)

onMounted(() => {
  setInterval(() => {
    if (progress.value < 100) progress.value += 10
  }, 1000)
})
</script>
