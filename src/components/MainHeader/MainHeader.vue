<template>
  <nav class="fixed top-0 z-30 w-full bg-primary">
    <div class="w-full flex flex-wrap items-center justify-between gap-x-40 h-20 px-7">
      <div class="flex items-center flex-grow gap-x-24">
        <div class="flex items-center gap-6">
          <MenuHamburger @toggle-nav="onToggleNavOpen" />
          <img src="@/assets/images/logo-vacanti.svg" class="w-24" alt="Vacanti Logo" />
        </div>
        <SearchBar />
      </div>
      <div class="flex flex-grow-1 items-center gap-6">
        <NotificationButton />
        <UserProfile />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import SearchBar from './SearchBar.vue'
import NotificationButton from './NotificationButton.vue'
import UserProfile from '@/components/MainHeader/UserProfile.vue'
import MenuHamburger from '@/components/MainHeader/MenuHamburger.vue'
import { onMounted, ref } from 'vue'

const emits = defineEmits(['toggle-nav'])

const isNavOpen = ref<boolean>(true)

const onToggleNavOpen = (payload: boolean) => {
  isNavOpen.value = payload
  emits('toggle-nav', isNavOpen.value)
}

onMounted(() => {
  emits('toggle-nav', isNavOpen.value)
})
</script>
