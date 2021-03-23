import axios from "axios";
import Vue from "vue";
Vue.prototype.$url = "https://corvirus.herokuapp.com/products";
Vue.prototype.$prox = axios.create({
  baseURL: "https://sabz.herokuapp.com/https://corvirus.herokuapp.com/",
});
Vue.prototype.$axios = axios.create({});
Vue.prototype.$cor = axios.create({
  baseURL: "https://corvirus.herokuapp.com/",
});
