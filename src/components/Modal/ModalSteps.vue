<template>
  <Modal>
    <Swiper
      :slides-per-view="1"
      :space-between="50"
      :effect="'fade'"
      :pagination="paginationOptions"
      :modules="modules"
      @swiper="onSwiper"
      class="relative"
    >
      <swiper-slide v-for="step in props.steps" :key="step.title" :virtualIndex="step.title">
        <div class="flex flex-col justify-center text-center bg-white">
          <img :src="step.image" :alt="step.title" class="h-72 mb-9" />
          <h2 class="bold text-color-3 mt-4 mb-6">{{ step.title }}</h2>
          <p class="sm text-color-2">{{ step.content }}</p>
        </div>
      </swiper-slide>
      <div class="flex flex-row mt-12">
        <Button
          id="buscar-vagas"
          size="large"
          label="Buscar Vagas"
          color="blank"
          class="mr-3"
          href="#"
        ></Button>
        <Button
          id="continuar"
          size="large"
          label="Continuar"
          class="ml-3"
          @click="nextBtn"
        ></Button>
      </div>
      <div class="pagination h-1"></div>
    </Swiper>
  </Modal>
</template>

<script setup lang="ts">
import Modal from '@/components/Modal/Modal.vue'
import Button from '@/components/Button.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectFade, Pagination } from 'swiper/modules'
import { ref } from 'vue'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import type { PaginationOptions } from 'swiper/types'
import router from '@/router'
import { useAuth } from '@/stores/auth'

interface Step {
  title: string
  content: string
  image: string
}

const props = defineProps({
  steps: {
    type: Array as () => Step[],
    required: true
  }
})

const paginationOptions: PaginationOptions = {
  clickable: true,
  el: '.pagination',
  bulletClass: 'h-2 w-4 bg-bgColor rounded-full mx-2',
  bulletActiveClass: '!w-11 bg-primary-light transition-all'
}

const swiperInstance = ref()

function onSwiper(swiper: unknown) {
  swiperInstance.value = swiper
}

function nextBtn() {
  if (swiperInstance.value.activeIndex === props.steps.length - 1) {
    useAuth().completeOnboarding()
    router.push('/dashboard');
  } else {
    swiperInstance.value.slideNext();
  }
}

const modules = [Pagination, EffectFade]
</script>

<style>
.pagination {
  position: absolute !important;
  top: 55% !important;
  left: 35% !important;
  z-index: 100;
  display: flex;
}
</style>
