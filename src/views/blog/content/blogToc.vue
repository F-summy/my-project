<template>
  <div class="blod-toc-container">
    <h4>目录</h4>
    <List :list="toc" @select="select"></List>
  </div>
</template>

<script>
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
  methods: {
    select(item) {
      location.hash = item.anchor;
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
