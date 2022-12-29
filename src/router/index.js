import Vue from "vue";
import VueRouter from "vue-router";
import { setRouterTitle } from "../utils/title";
//导入页面
if (!window.VueRouter) {
  Vue.use(VueRouter);
}
import notFound from "../components/notFound/index.vue";
const router = new VueRouter({
  routes: [
    {
      name: "Home",
      path: "/",
      component: () => import("../views/home"),
      meta: { title: "首页" },
    },
    {
      name: "Blog",
      path: "/blog",
      component: () => import("../views/blog"),
      meta: { title: "文章" },
    },
    {
      name: "BlogDetail",
      path: "/blog/:id",
      component: () => import("../views/blog/content/blogDetail.vue"),
    },
    {
      name: "CalssBlog",
      path: "/blog/cate/:id",
      component: () => import("../views/blog"),
    },
    {
      name: "About",
      path: "/about",
      component: () => import("../views/about"),
      meta: { title: "关于我" },
    },
    {
      name: "Project",
      path: "/project",
      component: () => import("../views/project"),
      meta: {
        title: "项目&效果",
      },
    },
    {
      name: "Message",
      path: "/message",
      component: () => import("../views/message"),
      meta: {
        title: "留言板",
      },
    },
    {
      name: "notFound",
      path: "*",
      component: notFound,
      meta: {
        title: "404",
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
