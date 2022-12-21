import Vue from "vue";
import App from "./App.vue";
import "./style/common.less";
import router from "./router";
import "./mock/index";
import load from "./loading";

Vue.directive("loading", load);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
