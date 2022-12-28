<template>
  <div class="side-aside-container">
    <div class="content">
      <Avatar v-if="data.avatar" :url="data.avatar" />
      <h1 class="title">{{ data.siteTitle }}</h1>
      <MenuNav />
      <Contact />
    </div>
  </div>
</template>

<script>
import Avatar from "./Avatar.vue";
import Contact from "./Contact.vue";
import MenuNav from "./MenuNav.vue";
import { mapState } from "vuex";
export default {
  components: {
    Avatar,
    Contact,
    MenuNav,
  },
  computed: {
    ...mapState("setting", ["data"]),
  },
};
</script>

<style lang="less" scoped>
@import "../style/var.less";
.side-aside-container {
  box-sizing: border-box;
  overflow: hidden;
  background-color: @dark;
  width: 100%;
  height: 100%;

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
