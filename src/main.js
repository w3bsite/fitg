import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./plugins/chimera";
import "./plugins/asynccomputed";
import "./plugins/qs";

new Vue({
  router,
  store,
  vuetify,

  render: (h) => h(App),
}).$mount("#app");
