import axios from "axios";

import Vue from "vue";
Vue.prototype.$url = "https://corvirus.herokuapp.com/products";
Vue.prototype.$urlroot = "https://corvirus.herokuapp.com";
Vue.prototype.$urllog = "https://corvirus.herokuapp.com/connect/google";
Vue.prototype.$prnews =
  "http://sabz.herokuapp.com/https://www.p30day.ir/wp-json/wp/v2/posts?categories=121081";
Vue.prototype.$urlnews =
  "https://www.sargarme.com/wp-json/wp/v2/posts?category=55";
Vue.prototype.$axios = axios.create({});
Vue.prototype.$cor = axios.create({
  baseURL: "https://corvirus.herokuapp.com/products/",
});
Vue.prototype.$axiosqs = axios.create({
  baseURL: "https://corvirus.herokuapp.com/products",
  // paramsSerializer: params => {
  //   return qs.stringify(params);
  // }
});
