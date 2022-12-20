<template>
  <div class="menu-container">
    <router-link
      :to="{ name: item.name }"
      class="content"
      :exact="item.exact"
      :key="item.name"
      v-for="item in list"
    >
      <Icon class="icons" :type="item.type"></Icon>
      <span class="text">{{ item.content }}</span>
    </router-link>
  </div>
</template>

<script>
import Icon from "@/components/Icons.vue";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      list: [
        { name: "Home", type: "home", content: "首页", exact: true },
        { name: "Blog", type: "blog", content: "文章", exact: false },
        { name: "About", type: "about", content: "关于我", exact: true },
        { name: "Project", type: "code", content: "项目&效果", exact: true },
        { name: "Message", type: "chat", content: "留言板", exact: true },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import "../style/var.less";
.menu-container {
  width: 100%;
  .content {
    color: @lightWords;
    display: flex;
    padding: 10px;
    padding-left: 35px;
    cursor: pointer;
    box-sizing: border-box;
    &.router-link-active {
      color: @gray;
      background: darken(@words, 3%);
    }
    &:hover {
      color: @gray;
    }
    .icons {
      margin: 0 10px;
    }
    .text {
      font-size: 16px;
    }
  }
}
</style>
