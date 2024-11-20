import './main.css'

import { createApp, defineCustomElement } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import HelloWorld from './components/HelloWorld.ce.vue'
import vuetify from './plugins/vuetify'

customElements.define('hello-world', defineCustomElement(HelloWorld))

createApp(App)
  .use(createI18n({ legacy: false, messages: {} }))
  .use(vuetify())
  .mount('#app')
