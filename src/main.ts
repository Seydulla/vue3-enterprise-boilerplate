import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import globals from "./components/globals";
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(globals);

app.mount("#app");
