import { boot } from 'quasar/wrappers';

import AppModalWindow from 'src/components/hoc/AppModalWindow.vue';
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  app.component('AppModalWindow', AppModalWindow);
});
