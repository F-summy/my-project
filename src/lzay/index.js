import events from "../events";
import delay from "../utils/delay";
import src from "../assets/R-C.gif";
let arr = [];
function setImage(item) {
  item.dom.src = src;
  //当图片加载后执行
  item.dom.onload = function () {
    const dom = item.dom.getBoundingClientRect();
    const height = dom.height;
    const clientHeight = document.documentElement.clientHeight;
    if (dom.top < clientHeight && dom.top >= -height) {
      item.dom.src = item.src;
      arr = arr.filter((i) => i !== item);
    }
  };
}
function result() {
  for (const item of arr) {
    setImage(item);
  }
}
//监听滚动事件
events.$on("mainContainer", delay(result, 500));

export default {
  bind(el, bingding) {
    const img = {
      dom: el,
      src: bingding.value,
    };
    arr.push(img);
    setImage(img);
  },
  unbind(el) {
    arr = arr.filter((item) => item.dom != el);
  },
};
