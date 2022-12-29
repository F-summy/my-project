<template>
  <div class="not-found">
    <img class="img" :src="data" alt="" />
  </div>
</template>

<script>
import url from "../../assets/R-C.jpg";
export default {
  data() {
    return {
      data: "",
    };
  },
  created() {
    this.data = url;
  },
};
</script>

<style lang="less" scoped>
.not-found {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .img {
    display: block;
    width: 400px;
    height: 400px;
    object-fit: cover;
  }
}
</style>
