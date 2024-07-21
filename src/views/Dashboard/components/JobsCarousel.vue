<template>
  <swiper
    :slides-per-view="3.5"
    :space-between="24"
    :mousewheel="true"
    :scrollbar="{
      hide: true
    }"
    :modules="modules"
  >
    <swiper-slide class="py-1.5 px-0.5 mb-2" v-for="job in jobs">
      <div class="pt-1">
        <JobCard :params="job" />
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel, Scrollbar } from 'swiper/modules'
import type { JobCardParams } from '@/views/Dashboard/models/job-card-params.interface'
import JobCard from '@/views/Dashboard/components/JobCard.vue'

import 'swiper/css/bundle'

const props = defineProps({
  jobs: Array<JobCardParams>
})

const modules = [Mousewheel, Scrollbar]
</script>
