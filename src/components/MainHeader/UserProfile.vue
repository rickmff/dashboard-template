<script setup lang="ts"></script>

<template>
  <div
    class="w-52
           h-12
           px-3
           flex
           items-center
           gap-x-3
           rounded-lg
           bg-primary-lighten
           cursor-pointer
           hover:bg-primary
           hover:ring-1
           ring-white
           transition-all
           active:transform
           active:scale-[1.01]"
  >
    <div class="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-bgColor">
      <p class="text-center text-xxxs">LM</p>
    </div>
    <div>
      <p class="text-xxs text-bgColor">Lorenzo Manoel</p>
      <p class="text-xxxs text-bgColor transform translate-y-[-2px]">Estudante</p>
    </div>
  </div>
</template>

<style scoped></style>
