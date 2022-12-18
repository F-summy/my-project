<template>
  <div class="empty-container">
    <i class="iconfont iconempty">
      <span class="text"> 当前没有数据! </span>
    </i>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
@import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css";
.empty-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  .iconfont {
    font-size: 60px;
    color: #ccc;
    text-align: center;
    .text {
      display: block;
      font-size: 14px;
      margin: 5px;
      color: #ccc;
    }
  }
}
</style>
