<template>
  <transition-group>
    <template v-if="open">
      <div class="fixed inset-0 bg-primary-opacity"></div>
      <div class="fixed inset-0 flex justify-center items-center">
        <div class="bg-white rounded-xl p-8 max-w-lg">
          <slot></slot>
        </div>
      </div>
    </template>
  </transition-group>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const open = ref(false)

onMounted(() => {
  open.value = true
})
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
