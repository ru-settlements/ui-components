# UI Lib for settlements 

## Using
```js
import '@ru-settlements/ui-components/dist/ui.css'
import UIComponents from '@ru-settlements/ui-components'

const app = createApp(App)
app.use(UIComponents)
app.mount('#app')
```
All components will be injected globally

## Publish StoryBook
put your project token to .env.local and run `yarn run storybook:publish`

You can see published on https://www.chromatic.com/library?appId=643e32d22c36ccb7ca3c93d5

---

powered by Vite + TS + SCSS + StoryBook

