let storeTitle = "";
let routerTitle = "";
//设置标题函数
function setData() {
  if (!storeTitle && !routerTitle) {
    document.title = "loading";
  } else if (!storeTitle && routerTitle) {
    document.title = routerTitle;
  } else if (storeTitle && !routerTitle) {
    document.title = storeTitle;
  } else {
    document.title = `${routerTitle}--${storeTitle}`;
  }
}
//设置初始标题

export function setStoreTitle(content) {
  storeTitle = content;
  setData();
}

//设置页面标题
export function setRouterTitle(content) {
  routerTitle = content;
  setData();
}
