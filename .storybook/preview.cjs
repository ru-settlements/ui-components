import { setup } from '@storybook/vue3'
import mdiVue from 'mdi-vue/v3'
import * as icons from '@/plugins/mdi/mdi'

export const parameters = {
  viewport: {
    viewports: {
      BiggerMobile: {
        name: 'BiggerMobile',
        styles: {
          width: '400px',
          height: '801px',
        },
      },
    }
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

setup((app) => {
  app.use(mdiVue, { icons })
})
