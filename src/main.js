import { createApp } from "vue";
import App from "./App.vue";
import { FontAwesomeIcon } from "./plugins/font-awesome";
import router from './router'

createApp(App)
  .component("fa", FontAwesomeIcon)
  .use(router)
  .mount("#app");
