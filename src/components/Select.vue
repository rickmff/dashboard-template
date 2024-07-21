<template>
  <div class="relative mb-4">
    <select
      :id="props.id"
      :name="props.id"
      :class="selectClass"
      :disabled="props.disabled"
      :value="modelValue"
      @change="handleSelect"
    >
      <option value="" disabled selected hidden>
        {{ props.placeholder }}
      </option>
      <option v-for="(item, index) in props.items" :key="index" :value="item">
        {{ item }}
      </option>
    </select>
    <label
      for="props.id"
      class="absolute rounded-full left-3 -top-2 transition-all duration-300 opacity-0 bg-white z-10 text-color-2 font-normal text-xxxs px-1"
      :class="{ 'opacity-100': isFocused || modelValue !== '' }"
    >
      {{ props.placeholder }}
    </label>
    <img v-if="props.icon" :class="classBaseIcon" :src="iconPath" alt="icon" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    required: false
  },
  placeholder: {
    type: String,
    default: 'Selecionar',
    required: false
  },
  icon: {
    type: String,
    required: false
  },
  iconPosition: {
    type: String as () => 'left' | 'right',
    default: 'left',
    required: false
  },
  disabled: {
    type: Boolean,
    default: false,
    required: false
  },
  items: {
    type: Array,
    required: true
  }
})

const isFocused = ref(false)

const selectClass = computed(() => [
  'rounded-lg focus-visible:border-primary-light focus-visible:outline-none border border-grey-95 w-full h-12 text-xs font-normal text-grey-30 placeholder:text-xs placeholder:text-grey-30 placeholder:focus:opacity-0 cursor-pointer',
  props.icon ? 'px-11' : 'px-3.5'
])

const classBaseIcon = computed(() => [
  'absolute top-3',
  props.iconPosition === 'right' ? 'right-3 left-auto' : 'left-3'
])

const iconPath = computed(() => `src/assets/icons/${props.icon}.svg`)

const emit = defineEmits(['update:modelValue'])

const handleSelect = (e: Event) => {
  const target = e.target as HTMLSelectElement
  if (target instanceof HTMLSelectElement) {
    return emit('update:modelValue', target.value)
  }
}
</script>
