<template>
  <ul class="list-container">
    <li v-for="(item, i) in list" :key="i">
      <span @click="handleClick(item)" :class="{ active: item.selected }">
        {{ item.name }}</span
      >
      <span @click="handleClick(item)" :class="{ active: item.selected }">
        {{ item.articleCount }}篇</span
      >
      <List @select="handleClick" :list="item.children"></List>
    </li>
  </ul>
</template>

<script>
export default {
  name: "List",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      this.$emit("select", item);
      console.log(this.list);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../../style/var.less";
.list-container {
  width: 100%;
  height: 100%;
  margin-left: 1em;
  list-style: none;
  font-size: 14px;
  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    span {
      margin-right: 5px;
    }
  }
  .active {
    color: @primary;
    font-weight: bold;
  }
}
</style>
