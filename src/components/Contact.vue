<template>
  <div class="contact-container">
    <div class="content" :key="index" v-for="(item, index) in list">
      <Icon class="icons" :type="item.type"></Icon>
      <span class="text">{{ item.content }}</span>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icons.vue";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      list: [
        { type: "github", content: "NAO FAKUANG" },
        { type: "mail", content: "7752@163.com" },
        { type: "qq", content: "35415623" },
        { type: "weixin", content: "Y55478978" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import "../style/var.less";
.contact-container {
  width: 100%;
  .content {
    color: @lightWords;
    display: flex;
    padding: 5px;
    padding-left: 10px;
    &:hover {
      color: @gray;
    }
    .icons {
      font-size: 18px;
      margin: 0 10px;
    }
    .text {
      font-size: 12px;
      margin-top: 3px;
    }
  }
}
</style>
