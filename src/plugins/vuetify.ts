/* eslint-disable jsdoc/require-jsdoc */
import type { App } from 'vue'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

const config = {
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
}

export default function() {
  return (app: App) => {
    app.use(createVuetify(config))
  }
}
