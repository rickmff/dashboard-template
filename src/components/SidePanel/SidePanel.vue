<template>
  <!-- BACKDROP // SIDE PANEL WRAPPER -->
  <Transition name="fade">
    <div
      v-if="showBackdrop"
      class="h-full w-full fixed top-0 left-0 bg-grey-10 bg-opacity-50 z-40"
      @click="dismiss"
    ></div>
  </Transition>

  <!--  SIDE PANEL CONTAINER -->
  <Transition name="unfold">
    <div
      v-if="showBackdrop"
      class="fixed top-0 right-0 h-full w-1/3 bg-white rounded-tl-2xl rounded-bl-2xl z-50"
    >
      <!--   SIDE PANEL CONTENT   -->
      <div class="p-6">
        <!--    SIDE PANEL HEADER    -->
        <h2 class="relative top-0 mb-6 flex items-center justify-between bold">
          <span class="flex text-primary gap-2">
            <img v-if="props.header?.iconPath" :src="props.header.iconPath" alt="Ícone de apoio" />
            {{ props.header.title }}
          </span>
          <img
            class="cursor-pointer"
            src="../../assets/icons/close-active.svg"
            alt="Botão fechar"
            @click="dismiss"
          />
        </h2>
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import type { PropType } from 'vue'
import type { SidePanelHeader } from '@/components/SidePanel/models/side-panel-heading.interface'

const props = defineProps({
  isVisible: Boolean,
  header: {
    type: Object as PropType<SidePanelHeader>,
    required: true
  }
})

const emits = defineEmits(['close'])

const showBackdrop = ref<Boolean>(props.isVisible)

const dismiss = () => {
  showBackdrop.value = false
  emits('close', showBackdrop.value)
}

watchEffect(() => {
  showBackdrop.value = props.isVisible
})
</script>

<style scoped>
@import '@/styles/animations/fade.scss';
@import '@/styles/animations/unfold.scss';
</style>
