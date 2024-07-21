<template>
  <div
    class="w-full bg-white p-4 rounded-xl cursor-pointer ring-grey-90 hover:ring-2 transform active:scale-[0.99]"
    :class="{
      '!bg-primary-lighten !bg-opacity-10 ring-2 ring-primary-light': props.jobListItem?.isActive
    }"
  >
    <div class="flex items-center justify-start gap-x-2">
      <img class="inline-block w-12 h-12" :src="jobListItem.avatarPath" alt="Avatar da vaga" />
      <div>
        <h5 class="medium">{{ jobListItem.jobTitle }}</h5>
        <p class="flex items-baseline gap-x-1 text-primary-light text-xxs">
          <img src="src/assets/icons/pin-dark.svg" alt="Ícone de localização" />
          {{ jobListItem.location }}
        </p>
      </div>
    </div>

    <div class="flex items-baseline justify-between">
      <div class="flex items-center gap-x-1 mt-4">
        <Badge v-for="perk in jobListItem.perks" :key="perk" :label="perk" size="xxxs"   />
      </div>

      <p class="text-xxxs text-grey-80">{{ jobListItem.company }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { JobListItemParams } from '@/views/Jobs/models/job-list-item.interface'
import { watch } from 'vue'
import Badge from "@/components/Badge.vue";

const props = defineProps({
  jobListItem: {
    type: Object as () => JobListItemParams,
    required: true
  }
})

watch(
  () => props.jobListItem?.isActive,
  () => {}
)
</script>
