<template>
  <component :is="Example" v-bind="{ width: 350, height: 450 }" />
</template>

<script lang="ts" setup>
import Example from './components/Example.vue'

</script>
