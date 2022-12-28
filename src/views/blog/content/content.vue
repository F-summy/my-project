<template>
  <div class="blog-detail-container">
    <h1>{{ blog.title }}</h1>
    <div class="aside">
      <span>日期: {{ formate(blog.createDate) }}</span>
      <span>浏览: {{ blog.scanNumber }}</span>
      <a href="#data-form-container">评论: {{ blog.commentNumber }}</a>
      <a href="">{{ blog.category.name }}</a>
    </div>
    <div v-html="blog.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import formate from "../../../utils/formate";
import { setRouterTitle } from "../../../utils/title";
import "highlight.js/styles/github.css";
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  created() {
    if (this.blog.title) {
      setRouterTitle(this.blog.title);
    }
  },

  methods: {
    formate,
  },
};
</script>

<style lang="less" scoped>
@import "../../../style/var.less";
@import "../../../style/markdown.css";
.blog-detail-container {
  .aside {
    font-size: 12px;
    color: @gray;
    span,
    a {
      margin-right: 15px;
    }
  }
  .markdown-body {
    margin: 2em 0;
  }
}
</style>
