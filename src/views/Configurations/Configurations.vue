<template>
  <div>
    <ViewHeader class="sticky top-20" title="Configurações" back-to-url="/dashboard" />
    <div class="card m-6 p-0">
      <a-tabs
        class="flex justify-between min-w-full"
        v-model:activeKey="selectedTab"
        @tab-click="handleTabClick"
      >
        <a-tab-pane class="grow" v-for="tab in tabs" :key="tab.name">
          <template #tab>
            <div class="flex items-center">
              <img :src="tab.icon" />
              <p>{{ tab.name }}</p>
            </div>
          </template>
          <router-view :title="tab.name" />
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import ViewHeader from '@/components/ViewHeader.vue'
import icons from '@/assets/icons/tabs-configuracoes'
import { useRoute, useRouter } from 'vue-router'
import { onMounted, reactive, ref } from 'vue'

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
  { name: 'Privacidade', icon: icons.privacy },
  { name: 'Políticas e termos', icon: icons.doc },
  { name: 'Notificações', icon: icons.notification },
  { name: 'Alterar senha', icon: icons.lock }
])
</script>

<style scoped lang="scss">
:deep(.ant-tabs-nav) {
  margin: 0;

  .ant-tabs-nav-list {
    width: 100%;

    .ant-tabs-tab {
      width: 22%;
      height: 58px;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
