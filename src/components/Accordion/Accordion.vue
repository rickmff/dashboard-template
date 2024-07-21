<template>
  <div id="accordion-list" class="w-full mt-4">
    <div
      class="p-6 w-full border-b-2 border-grey-50"
      v-for="item in items"
      :key="item.id"
      :id="`accordion-item-${item.id}`"
    >
      <h5
        class="w-full flex items-center justify-between text-primary bold cursor-pointer"
        @click="toggleItem(item)"
      >
        {{ item.title }}
        <img
          class="inline-block"
          :class="{ 'transform rotate-180': item.isOpen }"
          src="@/assets/icons/chevron-down-dark.svg"
          alt=""
        />
      </h5>
      <p class="w-3/4 mt-2 text-grey-30 leading-relaxed transition-all" v-if="item.isOpen">
        {{ item.bodyText }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AccordionItemInterface } from '@/components/Accordion/models/accordion-item.interface'
import { ref } from 'vue'

const props = defineProps({
  accordionItems: {
    type: Array as () => AccordionItemInterface[],
    required: true
  }
})

const items = ref(props.accordionItems)

const toggleItem = (item: AccordionItemInterface) => {
  item.isOpen = !item.isOpen
  console.log(item)
}
</script>

<style scoped>
@import '@/styles/animations/collapse.scss';
</style>
