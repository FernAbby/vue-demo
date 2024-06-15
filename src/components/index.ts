import type { App } from 'vue'

import SectionTitle from './SectionTitle/index.vue'
import LeftMenu from './LeftMenu/index.vue'

const components = {
  SectionTitle,
  LeftMenu
}

export default {
  install: (app: App) => {
    Object.keys(components).forEach((key) => {
      app.component(key, components[key])
    })
  }
}
