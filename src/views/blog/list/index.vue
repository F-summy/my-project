<template>
  <ul class="list-container">
    <li v-for="(item, i) in list" :key="i">
      <span @click="handleClick(item)" :class="{ active: item.selected }">
        {{ item.name }}</span
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
    },
  },
};
</script>

<style lang="less">
.list-container {
  margin-left: 1em;
  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
  }
  .active {
    color: red;
    font-weight: bold;
  }
}
</style>
