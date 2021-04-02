import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "./plugins/chimera";
import "./plugins/asynccomputed";
import "./plugins/qs";
import "./plugins/vuecookies";

new Vue({
  router,
  vuetify,

  render: (h) => h(App),
}).$mount("#app");
