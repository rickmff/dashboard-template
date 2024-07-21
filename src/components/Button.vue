<template>
  <button
    :id="props.id"
    :type="props.type"
    :disabled="props.disabled"
    :class="[buttonClass, isDisabled, props.class]"
    class="transition-transform transform active:scale-[0.95]"
  >
    <img v-if="props.icon" :src="iconPath" :alt="'icon' + props.icon" class="scale-75"/>
    <span>
      {{ props.label }}
    </span>
  </button>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  type: {
    type: String as () => 'button' | 'submit' | 'reset' | undefined,
    default: 'button',
    required: false
  },
  label: {
    type: String,
    required: true
  },
  color: {
    type: String as () => 'primary' | 'danger' | 'blank' | 'primaryOpacity' | 'transparent',
    default: 'primary',
    required: false
  },
  border: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String
  },
  size: {
    type: String as () => 'large' | 'medium' | 'small',
    default: 'medium'
  },
  class: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const iconPath = ref('')
const buttonClass = ref([''])

const isDisabled = computed(() => {
  return props.disabled ? '!bg-bgColor !text-grey-70 !cursor-not-allowed !hover:bg-bgColor' : ''
})

onMounted(() => {
  if (props.icon) {
    iconPath.value = `src/assets/icons/${props.icon}.svg`
  }
  buttonClass.value = [
    `text-primary flex justify-center items-center rounded-xl w-full font-bold transition-all duration-500`
  ]
  if (props.border) {
    buttonClass.value.push(
      `bg-${props.color}-opacity text-${props.color} border border-${props.color} hover:opacity-80`
    )
  }
  const colorClasses = {
    primary: 'bg-primary text-white hover:bg-primary-light', // blue
    danger: 'bg-danger text-white hover:bg-danger-light', // red
    blank: 'bg-bgColor text-primary hover:bg-grey-90', // bg color
    transparent: 'bg-transparent text-primary-light hover:bg-transparent hover:text-primary', // transparent
    primaryOpacity: 'bg-primary-opacity text-primary hover:bg-bg-grey-90' // blue opacity
  }
  buttonClass.value.push(colorClasses[props.color] || '')
  const sizeClasses = {
    large: 'h-14 text-sm', // 56px // 18px
    medium: 'h-12 text-xs', // 48px // 16px
    small: 'h-9 text-xxs' // 36px // 14px
  }
  buttonClass.value.push(sizeClasses[props.size] || '')
})
</script>
