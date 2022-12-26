import Vue from "vue";
import App from "./App.vue";
import "./style/common.less";
import router from "./router";
import "./mock/index";
import load from "./loading";
import "./events";
import lzay from "./lzay";

Vue.directive("loading", load);
Vue.directive("lzay", lzay);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
