import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.prototype.$http = axios.create({
  baseURL: "https://fitech.herokuapp.com/articles"
});

new Vue({
  router,

  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
