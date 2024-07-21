<template>
  <ul class="list-none pt-6 px-4 h-[calc(100vh-210px)] overflow-y-scroll">
    <li class="mb-4" v-for="item in jobsMockItems" :key="item.jobTitle">
      <JobsListItem :job-list-item="item" @click="toggleActive(item)" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import JobsListItem from '@/views/Jobs/components/JobsListItem.vue'
import type { JobListItemParams } from '@/views/Jobs/models/job-list-item.interface'
import { ref } from 'vue'

const jobsMockItems = ref<JobListItemParams[]>([
  {
    avatarPath: 'src/assets/images/mockups/job-avatar-4.png',
    jobTitle: 'Assistente Contábil',
    location: 'Campinas, São Paulo',
    perks: ['Estágio', 'Remoto'],
    company: 'LM Consulting',
    isActive: true
  },
  {
    avatarPath: 'src/assets/images/mockups/job-avatar-4.png',
    jobTitle: 'Analista Contábil Senior',
    location: 'Campinas, São Paulo',
    perks: ['CLT', 'Híbrido'],
    company: 'LM Consulting',
    isActive: false
  },
  {
    avatarPath: 'src/assets/images/mockups/job-avatar-4.png',
    jobTitle: 'Auditor Contábil',
    location: 'Campinas, São Paulo',
    perks: ['CLT', 'Presencial'],
    company: 'LM Consulting',
    isActive: false
  },
  {
    avatarPath: 'src/assets/images/mockups/job-avatar-1.png',
    jobTitle: 'Enfermeiro de centro cirúrgico',
    location: 'Campinas, São Paulo',
    perks: ['CLT', 'Presencial'],
    company: 'Hospital Oftalmológico Mallen',
    isActive: false
  },
  {
    avatarPath: 'src/assets/images/mockups/job-avatar-2.png',
    jobTitle: 'Técnico de Raio-x',
    location: 'Boa Vista, Roraima',
    perks: ['CLT', 'Presencial'],
    company: 'NL Ortopedia',
    isActive: false
  },
  {
    avatarPath: 'src/assets/images/mockups/job-avatar-4.png',
    jobTitle: 'Assistente Contábil',
    location: 'Campinas, São Paulo',
    perks: ['Estágio', 'Remoto'],
    company: 'LM Consulting',
    isActive: false
  },
  {
    avatarPath: 'src/assets/images/mockups/job-avatar-4.png',
    jobTitle: 'Analista Contábil Senior',
    location: 'Campinas, São Paulo',
    perks: ['CLT', 'Híbrido'],
    company: 'LM Consulting',
    isActive: false
  },
  {
    avatarPath: 'src/assets/images/mockups/job-avatar-4.png',
    jobTitle: 'Auditor Contábil',
    location: 'Campinas, São Paulo',
    perks: ['CLT', 'Presencial'],
    company: 'LM Consulting',
    isActive: false
  },
  {
    avatarPath: 'src/assets/images/mockups/job-avatar-1.png',
    jobTitle: 'Enfermeiro de centro cirúrgico',
    location: 'Campinas, São Paulo',
    perks: ['CLT', 'Presencial'],
    company: 'Hospital Oftalmológico Mallen',
    isActive: false
  },
  {
    avatarPath: 'src/assets/images/mockups/job-avatar-2.png',
    jobTitle: 'Técnico de Raio-x',
    location: 'Boa Vista, Roraima',
    perks: ['CLT', 'Presencial'],
    company: 'NL Ortopedia',
    isActive: false
  }
])

const toggleActive = (listItem: JobListItemParams) => {
  jobsMockItems.value.map((jobItem) => (jobItem.isActive = false))
  listItem.isActive = true
}
</script>
