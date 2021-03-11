import Vue from "vue";
import "./plugins/axios";
import "./plugins/lodash";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

new Vue({
  router,

  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
