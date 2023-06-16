import * as components from '@/components'
import * as icons from '@/plugins/mdi/mdi'
import mdiVue from 'mdi-vue/v3'
import type { App } from 'vue'

export default {
  install: (app: App) => {
    for (const key in components) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      app.component(key, components[key])
    }

    app.use(mdiVue, { icons })
  }
}

export * from '@/components'
