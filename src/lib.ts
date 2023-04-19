import type { App } from 'vue';
import * as components from "@/components";
import mdiVue from 'mdi-vue/v3'
import * as icons from '@/plugins/mdi/mdi'

export default {
  install: (app: App) => {
    for (const key in components) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      app.component(key, components[key])
    }

    app.use(mdiVue, { icons })
  }
};

export * from '@/components'
