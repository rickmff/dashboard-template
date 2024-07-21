<template>
  <Transition name="slide-in" mode="out-in">
    <div>
      <UserGreetings class="sticky top-20" />
      <FillProfile />
      <div class="px-6">
        <DashboardSection title="Filtrar vagas" :router-link="filtersSectionLink">
          <div class="flex items-center justify-between gap-4">
            <JobFilter v-for="(filter, index) in filterOptions" :key="index" :filter-option="filter" />
          </div>
        </DashboardSection>

        <DashboardSection title="Vagas em destaque" :router-link="jobsSectionLink">
          <div class="flex items-center gap-6">
            <DashboardCarousel :jobs="jobsMocks" />
          </div>
        </DashboardSection>
      </div>
      <SidePanel :header="sidePanelHeader" :is-visible="isJobFiltersVisible" @close="toggleSidePanel">
        <JobsFilters />
      </SidePanel>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import type { SidePanelHeader } from '@/components/SidePanel/models/side-panel-heading.interface'
import type { SectionLink } from '@/views/Dashboard/models/section-link.interface'
import type { JobFilterOption } from '@/views/Dashboard/models/job-filter-options.interface'
import type { JobCardParams } from '@/views/Dashboard/models/job-card-params.interface'
import UserGreetings from '@/views/Dashboard/components/UserGreetings.vue'
import DashboardSection from '@/views/Dashboard/components/DashboardSection.vue'
import JobFilter from '@/views/Dashboard/components/JobFilter.vue'
import DashboardCarousel from '@/views/Dashboard/components/JobsCarousel.vue'
import { ref } from 'vue'
import SidePanel from '@/components/SidePanel/SidePanel.vue'
import JobsFilters from '@/views/Dashboard/components/JobsFilters.vue'
import FillProfile from '@/views/Dashboard/components/FillProfile.vue'

const isJobFiltersVisible = ref(false)

const filtersSectionLink: SectionLink = {
  label: 'Exibir filtros',
  handler: () => {
    isJobFiltersVisible.value = !isJobFiltersVisible.value
  },
  icon: {
    path: 'src/assets/icons/filter-dark.svg',
    slot: 'start'
  }
}

const jobsSectionLink: SectionLink = {
  label: 'Exibir vagas',
  icon: {
    path: 'src/assets/icons/chevron-right-dark.svg',
    slot: 'end'
  }
}

const sidePanelHeader: SidePanelHeader = {
  title: 'Filtrar vagas',
  iconPath: 'src/assets/icons/filter-dark.svg'
}

const toggleSidePanel = () => {
  isJobFiltersVisible.value = !isJobFiltersVisible.value
}

const filterOptions: JobFilterOption[] = [
  {
    iconPath: {
      default: 'src/assets/icons/engineering.svg',
      hover: 'src/assets/icons/engineering-hover.svg'
    },
    label: 'Engenharia'
  },
  {
    iconPath: {
      default: 'src/assets/icons/health.svg',
      hover: 'src/assets/icons/health-hover.svg'
    },
    label: 'Saúde'
  },
  {
    iconPath: {
      default: 'src/assets/icons/education.svg',
      hover: 'src/assets/icons/education-hover.svg'
    },
    label: 'Educação'
  },
  {
    iconPath: {
      default: 'src/assets/icons/terminal.svg',
      hover: 'src/assets/icons/terminal-hover.svg'
    },
    label: 'Tecnologia'
  },
  {
    iconPath: {
      default: 'src/assets/icons/chat.svg',
      hover: 'src/assets/icons/chat-hover.svg'
    },
    label: 'Comunicação'
  },
  {
    iconPath: {
      default: 'src/assets/icons/design.svg',
      hover: 'src/assets/icons/design-hover.svg'
    },
    label: 'Design'
  }
]

const jobsMocks: JobCardParams[] = [
  {
    avatarPath: 'src/assets/images/mockups/job-avatar-1.png',
    coverPath: 'src/assets/images/mockups/cover-1.png',
    title: 'Técnico em Enfermagem',
    company: 'Hospital Mallen',
    location: 'Belo Horizonte, Minas Gerais',
    supportText: {
      label: 'Seja o primeiro a se candidatar',
      appearance: 'success'
    },
    ctaButton: {
      label: 'Quero me candidatar',
      isDisabled: false,
      url: '#'
    }
  },
  {
    avatarPath: 'src/assets/images/mockups/job-avatar-2.png',
    coverPath: 'src/assets/images/mockups/cover-2.png',
    title: 'Técnico de Raio-X',
    company: 'NL Ortopedia',
    location: 'São Paulo, São Paulo',
    supportText: {
      label: 'Seja o primeiro a se candidatar',
      appearance: 'success'
    },
    ctaButton: {
      label: 'Quero me candidatar',
      isDisabled: false,
      url: '#'
    }
  },
  {
    avatarPath: 'src/assets/images/mockups/job-avatar-3.png',
    coverPath: 'src/assets/images/mockups/cover-3.png',
    title: 'UX Designer Pleno',
    company: 'Luminum Main',
    location: 'Ribeirão Preto, São Paulo',
    supportText: {
      label: '245 pessoas já se candidataram',
      appearance: 'warning'
    },
    ctaButton: {
      label: 'Quero me candidatar',
      isDisabled: false,
      url: '#'
    }
  },
  {
    avatarPath: 'src/assets/images/mockups/job-avatar-1.png',
    coverPath: 'src/assets/images/mockups/cover-1.png',
    title: 'Técnico em Enfermagem',
    company: 'Hospital Mallen',
    location: 'Belo Horizonte, Minas Gerais',
    supportText: {
      label: 'Seja o primeiro a se candidatar',
      appearance: 'success'
    },
    ctaButton: {
      label: 'Quero me candidatar',
      isDisabled: false,
      url: '#'
    }
  },
  {
    avatarPath: 'src/assets/images/mockups/job-avatar-2.png',
    coverPath: 'src/assets/images/mockups/cover-2.png',
    title: 'Técnico de Raio-X',
    company: 'NL Ortopedia',
    location: 'São Paulo, São Paulo',
    supportText: {
      label: 'Seja o primeiro a se candidatar',
      appearance: 'success'
    },
    ctaButton: {
      label: 'Quero me candidatar',
      isDisabled: false,
      url: '#'
    }
  },
  {
    avatarPath: 'src/assets/images/mockups/job-avatar-3.png',
    coverPath: 'src/assets/images/mockups/cover-3.png',
    title: 'UX Designer Pleno',
    company: 'Luminum Main',
    location: 'Ribeirão Preto, São Paulo',
    supportText: {
      label: '245 pessoas já se candidataram',
      appearance: 'warning'
    },
    ctaButton: {
      label: 'Quero me candidatar',
      isDisabled: false,
      url: '#'
    }
  },
  {
    avatarPath: 'src/assets/images/mockups/job-avatar-1.png',
    coverPath: 'src/assets/images/mockups/cover-1.png',
    title: 'Técnico em Enfermagem',
    company: 'Hospital Mallen',
    location: 'Belo Horizonte, Minas Gerais',
    supportText: {
      label: 'Seja o primeiro a se candidatar',
      appearance: 'success'
    },
    ctaButton: {
      label: 'Quero me candidatar',
      isDisabled: false,
      url: '#'
    }
  },
  {
    avatarPath: 'src/assets/images/mockups/job-avatar-2.png',
    coverPath: 'src/assets/images/mockups/cover-2.png',
    title: 'Técnico de Raio-X',
    company: 'NL Ortopedia',
    location: 'São Paulo, São Paulo',
    supportText: {
      label: 'Seja o primeiro a se candidatar',
      appearance: 'success'
    },
    ctaButton: {
      label: 'Quero me candidatar',
      isDisabled: false,
      url: '#'
    }
  },
  {
    avatarPath: 'src/assets/images/mockups/job-avatar-3.png',
    coverPath: 'src/assets/images/mockups/cover-3.png',
    title: 'UX Designer Pleno',
    company: 'Luminum Main',
    location: 'Ribeirão Preto, São Paulo',
    supportText: {
      label: '245 pessoas já se candidataram',
      appearance: 'warning'
    },
    ctaButton: {
      label: 'Quero me candidatar',
      isDisabled: false,
      url: '#'
    }
  },
  {
    avatarPath: 'src/assets/images/mockups/job-avatar-1.png',
    coverPath: 'src/assets/images/mockups/cover-1.png',
    title: 'Técnico em Enfermagem',
    company: 'Hospital Mallen',
    location: 'Belo Horizonte, Minas Gerais',
    supportText: {
      label: 'Seja o primeiro a se candidatar',
      appearance: 'success'
    },
    ctaButton: {
      label: 'Quero me candidatar',
      isDisabled: false,
      url: '#'
    }
  },
  {
    avatarPath: 'src/assets/images/mockups/job-avatar-2.png',
    coverPath: 'src/assets/images/mockups/cover-2.png',
    title: 'Técnico de Raio-X',
    company: 'NL Ortopedia',
    location: 'São Paulo, São Paulo',
    supportText: {
      label: 'Seja o primeiro a se candidatar',
      appearance: 'success'
    },
    ctaButton: {
      label: 'Quero me candidatar',
      isDisabled: false,
      url: '#'
    }
  },
  {
    avatarPath: 'src/assets/images/mockups/job-avatar-3.png',
    coverPath: 'src/assets/images/mockups/cover-3.png',
    title: 'UX Designer Pleno',
    company: 'Luminum Main',
    location: 'Ribeirão Preto, São Paulo',
    supportText: {
      label: '245 pessoas já se candidataram',
      appearance: 'warning'
    },
    ctaButton: {
      label: 'Quero me candidatar',
      isDisabled: false,
      url: '#'
    }
  }
]
</script>
