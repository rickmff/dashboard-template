<template>
  <div class="w-full">
    <ViewHeader class="sticky top-20" title="Vagas" back-to-url="/dashboard">
      <div class="flex items-center justify-between mt-4 pt-4 border-t border-grey-90">
        <p class="text-sm text-grey-70">12.926 vagas abertas</p>

        <button class="flex items-center gap-2 transition-transform transform active:scale-[0.99]">
          <img src="@/assets/icons/filter-dark.svg" alt="Ícone de filtro" />
          <span class="text-xs text-primary-dark"> Todos os Filtros </span>
        </button>
      </div>
    </ViewHeader>

    <div class="flex items-start">
      <JobsList class="w-3/12" />
      <div class="w-9/12 h-[calc(100vh-210px)] overflow-y-scroll py-4 pr-4">
        <JobProfile />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ViewHeader from '@/components/ViewHeader.vue'
import JobsList from '@/views/Jobs/components/JobsList.vue'
import JobProfile from '@/views/Jobs/components/JobProfile.vue'
</script>
