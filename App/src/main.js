import { createPinia } from "pinia";
// Change the createApp line to this
import Vue, { createApp } from "@vue/compat";
import App from "./App.vue";
import router from "./router";

// Import BootstrapVue and its default styles
import BootstrapVue from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");