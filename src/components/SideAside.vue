<template>
  <div class="side-aside-container">
    <div class="content">
      <Avatar
        url="https://ts1.cn.mm.bing.net/th/id/R-C.c55c3eff199d241cea55093eb4fe4140?rik=jZq5IA9bwL3wCA&riu=http%3a%2f%2fimg.touxiangwu.com%2f2020%2f3%2fIZrQFr.jpg&ehk=xLpjiqiA3RYXxAYyRTV4FGqSSEBg34qYxYzkJ9TPUkQ%3d&risl=&pid=ImgRaw&r=0"
      />
      <h1 class="title">小馋&喵</h1>
      <MenuNav />
      <Contact />
    </div>
  </div>
</template>

<script>
import Avatar from "./Avatar.vue";
import Contact from "./Contact.vue";
import MenuNav from "./MenuNav.vue";
export default {
  components: {
    Avatar,
    Contact,
    MenuNav,
  },
};
</script>

<style lang="less" scoped>
@import "../style/var.less";
.side-aside-container {
  box-sizing: border-box;
  overflow: hidden;

  .avatar-container {
    margin-top: 35px;
    text-align: center;
  }
  .contact-container {
    margin: 40px 0;
  }
}
.title {
  width: 100%;
  text-align: center;
  font-weight: 400;
  color: @gray;
  font-size: 30px;
  margin: 15px 0;
}
</style>
