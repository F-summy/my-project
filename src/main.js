import Vue from "vue";
import App from "./App.vue";
import "./style/common.less";
import router from "./router";
import "./mock/index";
import load from "./loading";
import * as blog from "./aip/index";

// blog.getBlogType().then((r) => console.log(r));
// blog.getBlog(1, 20).then((r) => console.log(r));

Vue.directive("loading", load);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
