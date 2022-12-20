import Vue from "vue";
import App from "./App.vue";
import "./style/common.less";
import router from "./router";
import "./mock/index";
import { getBanner } from "./aip";

getBanner().then((res) => console.log(res));

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
