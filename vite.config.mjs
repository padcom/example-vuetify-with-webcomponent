import { defineBaseConfig } from '@padcom/vite-config-default'
import { defineVueBaseConfig } from '@padcom/vite-config-vue'
// import vuetify from 'vite-plugin-vuetify'

import pkg from './package.json'

export default defineBaseConfig(pkg, defineVueBaseConfig({
  // plugins: [
  //   vuetify({
  //     autoImport: true,
  //     styles: {
  //       configFile: './src/styles/settings.scss',
  //     },
  //   }),
  // ],
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag => tag.includes('-') && !tag.startsWith('v-'),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
      // https://sass-lang.com/documentation/breaking-changes/legacy-js-api/
        api: 'modern' },
      sass: {
        // https://vuetifyjs.com/en/features/sass-variables/#caveats
        api: 'modern-compiler',
      },
    },
  },
}))
