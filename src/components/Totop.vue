<template>
  <div v-show="show" @click="toTop" class="to-top-container">Top</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.$events.$on("mainScroll", this.handleScorll);
  },
  beforeDestroy() {
    this.$events.$off("mainScroll", this.handleScorll);
  },
  methods: {
    handleScorll(dom) {
      if (!dom) return;
      const height = 1000;
      const top = dom.scrollTop;
      if (top > height) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    toTop() {
      this.$events.$emit("setScroll", 0);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../style/var.less";
.to-top-container {
  position: fixed;
  bottom: 40px;
  right: 30px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  border-radius: 50%;
  background: @primary;
  cursor: pointer;
}
</style>
