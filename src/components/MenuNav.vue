<template>
  <div class="menu-container">
    <a
      :href="item.path"
      class="content"
      :class="{ selected: isSelected(item) }"
      :key="item.path"
      v-for="item in list"
    >
      <Icon class="icons" :type="item.type"></Icon>
      <span class="text">{{ item.content }}</span>
    </a>
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
        { type: "home", content: "首页", path: "/" },
        { type: "blog", content: "文章", path: "/blog" },
        { type: "about", content: "关于我", path: "/about" },
        { type: "code", content: "项目&效果", path: "/project" },
        { type: "chat", content: "留言板", path: "/message" },
      ],
    };
  },
  methods: {
    isSelected(item) {
      var link = item.path.toLowerCase(); // 菜单的链接地址
      var curPathname = location.pathname.toLowerCase(); // 当前浏览器的访问路径
      if (item.startWith) {
        return curPathname.startsWith(link);
      } else {
        return curPathname === link;
      }
    },
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
    &.selected {
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
