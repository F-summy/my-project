<template>
  <div class="page-container">
    <a @click="changePage(1)" :class="{ disabled: current === 1 }">首页</a>
    <a @click="changePage(current - 1)" :class="{ disabled: current === 1 }"
      >上一页</a
    >
    <a
      @click="changePage(n)"
      v-for="(n, index) in currentPages"
      :key="index"
      :class="{ active: n === current }"
      >{{ n }}</a
    >
    <a
      @click="changePage(current + 1)"
      :class="{ disabled: current === pageList }"
      >下一页</a
    >
    <a @click="changePage(pageList)" :class="{ disabled: current === pageList }"
      >尾页</a
    >
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    //总页数
    pageList() {
      return Math.ceil(this.total / this.limit);
    },
    //最小值
    minNum() {
      let min = this.current - Math.floor(this.limit / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    //最大值
    maxNum() {
      let max = this.minNum + this.visibleNumber - 1;
      if (max > this.pageList) {
        max = this.pageList;
      }
      return max;
    },
    //当前展示的页码
    currentPages() {
      const nums = [];
      for (var i = this.minNum; i <= this.maxNum; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  methods: {
    changePage(index) {
      if (index === this.current) return;
      if (index < 1) {
        index = 1;
      }
      if (index > this.pageList) {
        index = this.pageList;
      }
      this.$emit("changePage", index);
    },
  },
};
</script>

<style scoped lang="less">
@import "../style/var.less";
.page-container {
  display: flex;
  justify-content: center;
  margin: 15px 0;
  a {
    padding: 2px 4px;
    margin: 0 3px;
    color: #444;
    white-space: nowrap;
    cursor: pointer;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @primary;
      border-bottom: 2px solid @primary;
    }
  }
  ::selection {
    background: transparent;
  }
}
</style>
