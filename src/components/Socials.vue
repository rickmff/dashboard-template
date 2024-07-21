<template>
  <ul class="flex flex-row">
    <li v-for="icon in props.icons" :key="icon">
      <button :id="icon" type="button" @click="'www.' + icon + '.com'" :class="socialsClass">
        <img :src="'src/assets/icons/' + icon + '.svg'" :alt="icon" :class="iconClass" />
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps({
  icons: {
    type: Array as () => string[],
    required: true
  },
  size: {
    type: String as () => 'large' | 'medium' | 'small',
    required: true
  }
})

const socialsClass = ref([
  'rounded-full bg-bgColor hover:bg-grey-90 duration-300 hover:drop-shadow-ms'
])

const iconClass = ref([''])

onMounted(() => {
  const buttonSizeClasses = {
    large: 'p-5 mr-3',
    medium: 'p-5 mr-3',
    small: 'p-2.5 mr-3'
  }
  socialsClass.value.push(buttonSizeClasses[props.size])

  const iconSizeClassesIcon = {
    large: 'scale-100',
    medium: 'scale-90',
    small: 'scale-75'
  }

  iconClass.value.push(iconSizeClassesIcon[props.size])
})
</script>
