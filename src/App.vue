<template>
  <v-app ref="app" @custom-event="console.log('In App.vue - custom-event handler')">
    <v-navigation-drawer v-model="drawer">
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <hello-world priority @custom-event="dialog = !dialog">
        Text from slot!
      </hello-world>

      <v-dialog v-model="dialog" width="700">
        <v-card title="Dialog">
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Close Dialog" @click="dialog = false" />
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { VNavigationDrawer } from 'vuetify/components/VNavigationDrawer'
import { VApp } from 'vuetify/components/VApp'
import { VMain } from 'vuetify/components/VMain'
import { VAppBar, VAppBarNavIcon, VAppBarTitle } from 'vuetify/components/VAppBar'
import { VDialog } from 'vuetify/components/VDialog'
import { VCard, VCardText, VCardActions } from 'vuetify/components/VCard'
import { VBtn } from 'vuetify/components/VBtn'
import { VSpacer } from 'vuetify/components/VGrid'

const app = ref()
const drawer = ref(true)
const dialog = ref(false)
</script>
