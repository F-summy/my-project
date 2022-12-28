import Vue from "vue";
import VueRouter from "vue-router";
import { setRouterTitle } from "../utils/title";
//导入页面
Vue.use(VueRouter);

import Home from "../views/home";
import Blog from "../views/blog";
import About from "../views/about";
import Project from "../views/project";
import Message from "../views/message";
import BlogDetail from "../views/blog/content/blogDetail.vue";
const router = new VueRouter({
  routes: [
    { name: "Home", path: "/", component: Home, meta: { title: "首页" } },
    { name: "Blog", path: "/blog", component: Blog, meta: { title: "文章" } },
    { name: "BlogDetail", path: "/blog/:id", component: BlogDetail },
    { name: "CalssBlog", path: "/blog/cate/:id", component: Blog },
    {
      name: "About",
      path: "/about",
      component: About,
      meta: { title: "关于我" },
    },
    {
      name: "Project",
      path: "/project",
      component: Project,
      meta: {
        title: "项目&效果",
      },
    },
    {
      name: "Message",
      path: "/message",
      component: Message,
      meta: {
        title: "留言板",
      },
    },
  ],
  mode: "history",
});

router.afterEach((to) => {
  if (to.meta.title) {
    setRouterTitle(to.meta.title);
  }
});
export default router;
