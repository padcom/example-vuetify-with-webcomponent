<template>
  <v-btn @click="action()">
    <v-icon :icon="`$${ priority ? 'plus' : 'minus' }`" />
    &nbsp;
    <slot />
  </v-btn>
</template>

<script lang="ts" setup>
import { useHost, type App } from 'vue'
import { VBtn } from 'vuetify/components/VBtn'
import { VIcon } from 'vuetify/components/VIcon'

import vuetify from '@/plugins/vuetify'

defineProps({
  priority: { type: Boolean, default: false },
})

defineOptions({
  // this makes it a lot easier because we can use styles from the main application
  shadowRoot: true,
  // this allows us to configure the private app instance for the web component
  configureApp(app: App) {
    app.use(vuetify())
  },
})

// const emit = defineEmits(['custom-event'])
const host = useHost()

function action() {
  // doesn't bubble
  // emit('custom-event')

  // bubbles
  host?.dispatchEvent(new CustomEvent('custom-event', { bubbles: true }))
}
</script>

<style lang="sass" src="vuetify/styles"></style>

<style lang="sass" src="../styles/settings.scss"></style>
