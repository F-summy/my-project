import Vue from "vue";
import VueRouter from "vue-router";
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
    { name: "Home", path: "/", component: Home },
    { name: "Blog", path: "/blog", component: Blog },
    { name: "BlogDetail", path: "/blog/:id", component: BlogDetail },
    { name: "CalssBlog", path: "/blog/cate/:id", component: Blog },
    { name: "About", path: "/about", component: About },
    { name: "Project", path: "/project", component: Project },
    { name: "Message", path: "/message", component: Message },
  ],
  mode: "history",
});

export default router;
