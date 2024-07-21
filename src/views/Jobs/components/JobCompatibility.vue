<template>
  <div class="flex items-center justify-between bg-bgColor px-6 rounded-xl">
    <div>
      <h3 class="flex items-center gap-x-2 text-grey-30 medium">
        Compatibilidade
        <tippy :content="tooltipText" trigger="click">
          <img class="cursor-pointer" src="@/assets/icons/info-dark.svg" alt="Ícone de informação" />
        </tippy>
      </h3>
      <p class="text-grey-70">As chances de conquistar essa vaga são grandes!</p>
    </div>
    <div class="flex items-center gap-x-6">
      <h2 class="flex flex-col items-center bold text-center" :class="compatibilityStatusColor">
        {{ gaugeValue }}%
        <span class="text-xxxs 2xl:text-xs medium text-center">{{ compatibilityStatus }}</span>
      </h2>
      <GaugeChart :gauge-value="gaugeValue" />
    </div>
  </div>
</template>

<script setup lang="ts">
import GaugeChart from '@/components/GaugeChart.vue'
import { computed } from 'vue'
import { Tippy } from 'vue-tippy'

const gaugeValue = 82

const compatibilityStatus = computed(() => {
  return gaugeValue <= 25
    ? 'Baixa compatibilidade'
    : gaugeValue <= 75
    ? 'Média compatibilidade'
    : 'Alta compatibilidade'
})

const compatibilityStatusColor = computed(() => {
  return gaugeValue <= 25 ? 'text-danger' : gaugeValue <= 75 ? 'text-warning' : 'text-success'
})

const tooltipText = `A Compatibilidade é resultado da comparação entre sua formação acadêmica e as competências e
                     habilidades adicionadas em seu perfil com os requisitos das vagas.`
</script>
