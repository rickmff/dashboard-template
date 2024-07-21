<template>
  <div
    class="flex items-center justify-center bg-dashboard-skeletons bg-cover bg-center-center h-screen"
  >
    <Loading v-if="isLoading" />
    <ModalSteps v-else :steps="onboardingSteps" />
  </div>
</template>

<script setup lang="ts">
import ModalSteps from '@/components/Modal/ModalSteps.vue'
import Loading from '@/components/Loading.vue'
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

// Fake loading
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
})

const onboardingSteps = [
  {
    title: 'Preencha seu perfil!',
    content:
      'Seus dados são comparados com os requisitos das vagas e, portanto, quanto mais informações, mais chances de conquistar uma vaga!',
    image: 'src/assets/images/onboarding/onboarding1.svg'
  },
  {
    title: 'Encontre a vaga ideal!',
    content:
      'Preenchendo o perfil com suas competências, você aumenta as chances de encontrar uma vaga que atenda sua expectativa.',
    image: 'src/assets/images/onboarding/onboarding2.svg'
  },
  {
    title: 'Conquiste uma vaga!',
    content:
      'Preencha seu perfil, encontre a vaga ideal, se candidate e acompanhe todo o processo seletivo aqui em nosso sistema. Boa sorte!',
    image: 'src/assets/images/onboarding/onboarding3.svg'
  }
]
</script>
