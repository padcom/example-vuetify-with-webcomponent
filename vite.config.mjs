import { defineBaseConfig } from '@padcom/vite-config-default'
import { defineVueBaseConfig } from '@padcom/vite-config-vue'

import pkg from './package.json'

export default defineBaseConfig(pkg, defineVueBaseConfig({
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag => tag.includes('-') && !tag.startsWith('v-'),
      },
    },
  },
}))
