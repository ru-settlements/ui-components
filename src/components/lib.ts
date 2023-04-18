import type { App } from 'vue';
import { NewBlock, FilterBlock, UIButton } from "@/components";

export default {
  install: (app: App) => {
    app.component('NewBlock', NewBlock);
    app.component('FilterBlock', FilterBlock);
    app.component('UIButton', UIButton);
  }
};

export { NewBlock, FilterBlock, UIButton };
