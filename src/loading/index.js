//判断元素是否已经存在
import style from "./index.module.css";
import scr from "../assets/loading.svg";
function haveDom(el) {
  return el.querySelector("img[data-role=loading]");
}
export default {
  bind(el, bingding) {
    if (bingding.value) {
      if (haveDom(el)) return;
      const img = document.createElement("img");
      img.className = style.loading;
      img.dataset.role = "loading";
      img.src = scr;
      el.appendChild(img);
    }
  },
  update(el, bingding) {
    if (bingding.value) return;
    const img = el.querySelector("img[data-role=loading]");
    if (img) {
      img.remove();
    }
  },
};
