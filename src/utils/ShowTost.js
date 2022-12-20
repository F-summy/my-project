import Icon from "../components/Icons.vue";
import Vue from "vue";
import style from "../style/message.module.css";
//获取dom
function getComponentRootDom(comp, props) {
  const vm = new Vue({
    render: (h) => h(comp, { props }),
  });
  vm.$mount();
  return vm.$el;
}

export default function showTost(event = {}) {
  //解析传递的数据
  let {
    type = "info",
    duration = 3000,
    container = null,
    content = "",
    callback = null,
  } = event;
  //生成和获取相应的Dom
  const IconDom = getComponentRootDom(Icon, { type });
  const div = document.createElement("div");
  //设置样式
  div.className = `${style.message} ${style[type]}`;
  div.innerHTML = `${IconDom.outerHTML}<div>${content}</div>`;
  // 判断父容器并设置成相对定位
  if (!container) {
    container = document.body;
  }
  container.style.position =
    getComputedStyle(container).position === "static"
      ? "relative"
      : getComputedStyle(container).position;
  container.appendChild(div);
  // 浏览器强行渲染
  div.clientHeight; // 导致reflow
  //动画效果
  div.style.opacity = 1;
  div.style.transform = `translate(-50%, -50%)`;
  //消失动画

  setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = `translate(-50%, -50%) translateY(-25px)`;
    div.addEventListener(
      "transitionend",
      function () {
        div.remove();
        callback && callback();
      },
      { once: true }
    );
  }, duration);
}
