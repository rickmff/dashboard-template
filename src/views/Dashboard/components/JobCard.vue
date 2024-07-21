<template>
  <div
    class="w-4/4 h-96 bg-white rounded-xl ring-2 ring-grey-90 overflow-hidden cursor-pointer active:cursor-grabbing transition-transform transform hover:-translate-y-1"
  >
    <!--  COVER IMAGE  -->
    <div class="w-full h-28">
      <img class="w-full h-full object-cover" :src="params.coverPath" :alt="'Imagem da carreira' + params.header" />
    </div>
    <!--  CONTENT CONTAINER -->
    <div class="w-full h-full px-6 transform -translate-y-8">
      <!--   AVATAR   -->
      <div class="w-16 h-16">
        <img class="w-full h-full object-cover" :src="params.avatarPath" :alt="'Imagem do avatar da carreira' + params.company" />
      </div>
      <!--  PROFILE INFORMATION    -->
      <div class="w-full mt-2">
        <h3 class="medium">{{ params.header }}</h3>
        <h4 class="regular text-grey-70">{{ params.company }}</h4>
        <p class="text-grey-80 mt-3 flex items-baseline gap-1">
          <img src="src/assets/icons/pin-dark.svg" alt="Ícone de localização" />
          {{ params?.location }}
        </p>
      </div>
      <!--   SUPPORT TEXT   -->
      <p :class="`text-${params.supportText.appearance} mt-4`">
        {{ params.supportText.label }}
      </p>
      <!--   CTA BUTTON   -->
      <div class="flex justify-center items-center my-6">
        <Button
          id="job-card-action-button"
          color="blank"
          class="!text-color-1"
          size="large"
          :label="params.ctaButton.label"
          :disabled="params.ctaButton.isDisabled"
        ></Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { JobCardParams } from '@/views/Dashboard/models/job-card-params.interface'
import Button from '@/components/Button.vue'

defineProps({
  params: {
    type: Object as PropType<JobCardParams>,
    required: true
  }
})
</script>
