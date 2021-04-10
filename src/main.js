import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";

import router from "./router";
import vuetify from "./plugins/vuetify";
import "./plugins/chimera";
import "./plugins/asynccomputed";
import "./plugins/qs";
import "./plugins/vuecookies";

Vue.config.productionTip = false;

export const EventBus = new Vue({
  methods: {
    change(event) {
      this.$emit("cl", event);
    },
    signing(ev) {
      this.$emit("jw", ev);
    },
  },
});
new Vue({
  router,
  vuetify,

  render: (h) => h(App),
}).$mount("#app");
