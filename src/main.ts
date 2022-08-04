import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/components/globals";
const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");
