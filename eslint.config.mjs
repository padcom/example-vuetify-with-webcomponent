import config from '@padcom/eslint-config-vue'

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...config['flat/browser'],
  {
    rules: {
      'vue/block-lang': 'off',
      // 'vue/valid-v-slot': 'off',
      // 'vue/v-slot-style': 'off',
    },
  },
]
