<template>
  <div class="blod-toc-container">
    <h4>目录</h4>
    <List :list="tocMap" @select="select"></List>
  </div>
</template>

<script>
import delay from "../../../utils/delay";
import List from "../list/index.vue";
export default {
  components: {
    List,
  },
  props: {
    toc: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      anchor: "article-md-title-2",
    };
  },
  mounted() {
    this.$events.$on("mainScroll", delay(this.selected, 300));
  },
  beforeDestroy() {
    this.$events.$off("mainScroll", delay(this.selected, 300));
  },
  methods: {
    select(item) {
      //子组件抛出的事件
      location.hash = item.anchor;
    },
    selected() {
      //屏幕滚动的区域处理

      const height = 500;
      this.anchor = ""; //重置激活样式
      for (const dom of this.doms) {
        if (!dom) continue;
        const top = dom.getBoundingClientRect().top;
        if (top > 0 && top < height) {
          this.anchor = dom.id;
        } else if (top > height) {
          return;
        } else {
          this.anchor = dom.id;
        }
      }
    },
  },
  computed: {
    tocMap() {
      const getList = (toc = []) => {
        return toc.map((item) => ({
          ...item,
          selected: item.anchor === this.anchor,
          children: getList(item.children),
        }));
      };
      return getList(this.toc);
    },
    //获取标题dom
    doms() {
      const domList = [];
      const getDoms = (toc) => {
        for (const item of toc) {
          domList.push(document.getElementById(item.anchor));
          if (item.children && item.children.length) {
            getDoms(item.children);
          }
        }
      };
      getDoms(this.toc);
      return domList;
    },
  },
};
</script>

<style lang="less" scoped>
h4 {
  font-size: 24px;
  margin: 15px 0;
  margin-left: 15px;
  letter-spacing: 3px;
}
</style>
