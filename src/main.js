import Vue from "vue";
import App from "./App.vue";
import "./style/common.less";
import router from "./router";
import showTost from "./utils/ShowTost";

window.$show = showTost;
$show({
  type: "info",
  duration: 1500,
  container: null,
  content: "弹出框，提示内容！",
  callback: () => {
    console.log("提示完成！");
  },
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
