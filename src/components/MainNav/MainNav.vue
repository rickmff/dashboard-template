<template>
  <MainHeader @toggle-nav="onToggleNavOpen" />
  <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-20 w-64 h-screen pt-20 bg-white border-r border-grey-90 transition-all duration-500 ease-in-out"
    :class="{ '-ml-64 opacity0-': !isNavOpen }"
    aria-label="Sidebar"
  >
    <div class="h-100 pl-3 py-6 overflow-y-auto bg-white">
      <ul>
        <li
          class="relative"
          v-for="item in navItems"
          :key="item.id"
          @click="toggleItemActive(item)"
        >
          <RouterLink
            :to="'/' + item.id"
            class="flex items-center py-5 pl-4 text-gray-400 rounded-l-full hover:bg-gray-100"
            :class="activeItemClasses(item)"
          >
            <img :src="item.isActive ? item.iconActive : item.icon" alt="Navigation item icon" />
            <span class="ml-3 text-base">{{ item.label }}</span>
            <div
              v-if="item.isActive"
              class="indicator absolute right-0 h-6 w-0.5 rounded-l-xl bg-blue-500"
            ></div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </aside>

  <slot></slot>
</template>

<script setup lang="ts">
import MainHeader from '@/components/MainHeader/MainHeader.vue'
import { onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'

type NavItem = {
  id: string
  label: string
  icon: string
  iconActive: string
  isActive: boolean
}

const navItems: NavItem[] = reactive([
  {
    id: 'dashboard',
    label: 'Início',
    icon: 'src/assets/icons/home.svg',
    iconActive: 'src/assets/icons/home-active.svg',
    isActive: false
  },
  {
    id: 'meu-perfil',
    label: 'Meu Perfil',
    icon: 'src/assets/icons/person.svg',
    iconActive: 'src/assets/icons/person-active.svg',
    isActive: false
  },
  // {
  //   id: 'selection-process',
  //   label: 'Processo Seletivo',
  //   icon: 'src/assets/icons/briefcase.svg',
  //   iconActive: 'src/assets/icons/briefcase-active.svg',
  //   isActive: false
  // },
  {
    id: 'vagas',
    label: 'Vagas',
    icon: 'src/assets/icons/name_tag.svg',
    iconActive: 'src/assets/icons/name_tag-active.svg',
    isActive: false
  },
  // {
  //   id: 'contract',
  //   label: 'Contrato',
  //   icon: 'src/assets/icons/sign.svg',
  //   iconActive: 'src/assets/icons/sign-active.svg',
  //   isActive: false
  // },
  // {
  //   id: 'reports',
  //   label: 'Relatórios',
  //   icon: 'src/assets/icons/report.svg',
  //   iconActive: 'src/assets/icons/report-active.svg',
  //   isActive: false
  // },
  {
    id: 'configuracoes',
    label: 'Configurações',
    icon: 'src/assets/icons/settings.svg',
    iconActive: 'src/assets/icons/settings-active.svg',
    isActive: false
  },
  {
    id: 'ajuda',
    label: 'Ajuda',
    icon: 'src/assets/icons/help.svg',
    iconActive: 'src/assets/icons/help-active.svg',
    isActive: false
  }
])

const emits = defineEmits(['toggle-nav'])

const isNavOpen = ref<boolean>(true)

const route = useRoute()

const toggleItemActive = (selectedItem: NavItem) => {
  navItems.map((navItem) => (navItem.isActive = navItem.id === selectedItem.id))
}

const activeItemClasses = (item: NavItem) => (item.isActive ? ['bg-blue-50', 'text-blue-500'] : [])

const onToggleNavOpen = (payload: boolean) => {
  isNavOpen.value = payload
  emits('toggle-nav', isNavOpen.value)
}

onMounted(() => {
  navItems.map((navItem) => (navItem.isActive = navItem.id === route.name))
  emits('toggle-nav', isNavOpen.value)
})
</script>
