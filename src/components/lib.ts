import type { App } from 'vue';
import { NewBlock, FilterBlock, UIButton } from "@/components";
import mdiVue from 'mdi-vue/v3'
import * as icons from '@/plugins/mdi/mdi'

export default {
  install: (app: App) => {
    app.component('NewBlock', NewBlock);
    app.component('FilterBlock', FilterBlock);
    app.component('UIButton', UIButton);
    app.use(mdiVue, { icons })
  }
};

export { NewBlock, FilterBlock, UIButton };
