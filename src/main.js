import Vue from "vue";
import App from "./App.vue";
import "./style/common.less";
import router from "./router";
import "./mock/index";
import load from "./loading";
import "./events";
import lzay from "./lzay";
import store from "./store";
store.dispatch("setting/fetchSetting");

Vue.directive("loading", load);
Vue.directive("lzay", lzay);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
