import type { App, Component } from 'vue'

import SectionTitle from './SectionTitle/index.vue'
import LeftMenu from './LeftMenu/index.vue'

const components: Record<string, Component> = {
  SectionTitle,
  LeftMenu
}

export default {
  install: (app: App) => {
    Object.keys(components).forEach((key) => {
      if (components[key]) {
        app.component(key, components[key])
      }
    })
  }
}
