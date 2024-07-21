<template>
  <div class="relative mb-4">
    <input
      :id="props.id"
      :name="props.id"
      :type="inputType"
      :class="inputClass"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      @focus="isFocused = true"
      @blur="isFocused = false"
      v-maska
      :data-maska="props.maska"
      :value="modelValue"
      @input="handleInput"
    />
    <label
      for="props.id"
      class="absolute rounded-full left-3 -top-2 transition-all duration-300 opacity-0 bg-white z-10 text-color-2 font-normal text-xxxs px-1"
      :class="{ 'opacity-100': isFocused || modelValue !== '' }"
    >
      {{ props.placeholder }}
    </label>
    <img v-if="props.icon" :class="classBaseIcon" :src="iconPath" alt="icon" />
    <img
      v-if="showPasswordIcon"
      :class="[
        'absolute top-3 right-3 hover:opacity-80 cursor-pointer',
        !passwordVisibility ? 'opacity-50' : ''
      ]"
      src="@/assets/icons/eye.svg"
      alt="icon"
      @click="showPassword"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { vMaska } from 'maska'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text',
    required: false
  },
  placeholder: {
    type: String,
    default: 'placeholder',
    required: true
  },
  icon: {
    type: String,
    required: false
  },
  border: {
    type: Boolean,
    default: false,
    required: false
  },
  iconPosition: {
    type: String as () => 'left' | 'right',
    default: 'left',
    required: false
  },
  maska: {
    type: String,
    required: false
  },
  disabled: {
    type: Boolean,
    default: false,
    required: false
  }
})

const isFocused = ref(false)

const inputClass = computed(() => [
  'rounded-lg focus-visible:border-primary-light focus-visible:outline-none bg-white w-full h-12 text-xs font-normal text-grey-30 placeholder:text-xs placeholder:text-grey-30 placeholder:focus:opacity-0',
  props.border ? 'border border-primary' : 'border border-grey-95',
  inputType.value === 'password' && props.modelValue ? '!text-xxl tracking-widest' : '',
  props.icon ? 'px-11' : 'px-3.5'
])

const classBaseIcon = computed(() => [
  'absolute top-3',
  props.iconPosition === 'right' ? 'right-3 left-auto' : 'left-3'
])

const iconPath = computed(() => `src/assets/icons/${props.icon}.svg`)

const showPasswordIcon = computed(() => props.type === 'password' && props.modelValue !== '')

const passwordVisibility = ref(false)

const inputType = computed(() => (passwordVisibility.value ? 'text' : props.type))

const showPassword = () => {
  passwordVisibility.value = !passwordVisibility.value
}

const emit = defineEmits(['update:modelValue'])

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  if (target instanceof HTMLInputElement) {
    return emit('update:modelValue', target.value)
  }
}
</script>
