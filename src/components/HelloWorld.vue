<template>
  <v-btn @click="action()">
    <v-icon :icon="`$${ priority ? 'plus' : 'minus' }`" />
    &nbsp;
    <slot />
  </v-btn>

  <v-btn @click.stop="example = !example">
    Open embedded dialog
  </v-btn>

  <v-dialog v-model="example" width="700">
    <v-card title="Embedded dialog">
      <v-card-text>
        Hello! I am an embedded dialog inside of the <code>&lt;hello-world&gt;</code> web component
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text="Close Dialog" @click="example = false" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref, useHost, type App } from 'vue'

import { VBtn } from 'vuetify/components/VBtn'
import { VIcon } from 'vuetify/components/VIcon'
import { VDialog } from 'vuetify/components/VDialog'
import { VCard, VCardText, VCardActions } from 'vuetify/components/VCard'
import { VSpacer } from 'vuetify/components/VGrid'

import vuetify from '@/plugins/vuetify'

defineProps({
  priority: { type: Boolean, default: false },
})

defineOptions({
  // this makes it a lot easier because we can use styles from the main application
  shadowRoot: false,
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

const example = ref(false)
</script>
