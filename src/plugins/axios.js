import axios from "axios";
import Vue from "vue";

Vue.prototype.$axios = axios.create({
  baseURL: "https://sabz.herokuapp.com/",
});
(Vue.prototype.$cov = axios.create({
  baseURL: "https://corvirus.herokuapp.com/products",
})),
  (Vue.prototype.$igdb = axios.create({
    baseURL: "https://api.igdb.com/v4/games",
  }));
Vue.prototype.$cor = axios.create({
  baseURL: "https://sabz.herokuapp.com/https://corvirus.herokuapp.com/",
});
