import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import Typer from "./components/Typer.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader

Vue.use(Vuetify);
Vue.config.productionTip = false;

Vue.component("app-typer", Typer);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
