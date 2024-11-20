<template>
  <div class="example">
    <component :is="something" alt="something-alt" v-bind="{ width, height }">Here!</component>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineProps({
  name: { type: String, default: 'empty' },
  width: { type: [String, Number], default: 'width' },
  height: { type: [String, Number], default: 'height' },
})

const something = computed(() => Math.random() < 0.5 ? 'div' : 'span')
</script>
