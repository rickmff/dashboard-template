<template>
  <div>
    <ViewHeader class="sticky top-20" title="Ajuda" back-to-url="/dashboard" />
    <div class="card m-6 p-0">
      <a-tabs v-model:activeKey="selectedTab" @tab-click="handleTabClick">
        <a-tab-pane v-for="tab in tabs" :key="tab.name">
          <template #tab>
            <img :src="tab.icon" />
          </template>
          <router-view :title="tab.name" />
        </a-tab-pane>
      </a-tabs>
      <hr class="my-10" />

      <div class="mb-10 grid grid-cols-1 sm:grid-cols-5 gap-4 px-8">
        <div class="sm:col-span-3"></div>
        <div class="col-span-1">
          <Button id="voltar" label="Voltar para o perfil" size="large" color="blank" />
        </div>
        <div class="col-span-1">
          <Button id="salvar" label="Salvar" size="large" disabled />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import icons from '@/assets/icons/tabs-meu-perfil'
import ViewHeader from '@/components/ViewHeader.vue'

const router = useRouter()
const selectedTab = ref<string | string[]>('')

const handleTabClick = (key: string) => {
  selectedTab.value = key
  router.push({ name: key })
}

onMounted(() => {
  const currentRouteName = useRoute().name as string
  if (selectedTab.value !== currentRouteName) {
    selectedTab.value = currentRouteName
  }
})

const tabs = reactive([
  { name: 'Dados Pessoais', icon: icons.person },
  { name: 'Perfil e Curriculo', icon: icons.account },
  { name: 'Formação Acadêmica', icon: icons.school },
  { name: 'Experiência Profissional', icon: icons.work },
  { name: 'Minhas Habilidades', icon: icons.military },
  { name: 'Portfólio e Projetos', icon: icons.movie }
])
</script>

<style scoped lang="scss">
:deep(.ant-tabs-nav) {
  margin: 0px;
  .ant-tabs-nav-list {
    width: 100%;
    .ant-tabs-tab {
      width: 15%;
      height: 58px;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
