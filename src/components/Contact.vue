<template>
  <div class="contact-container" v-if="data.github">
    <div class="content">
      <a target="_blank" :href="data.github">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>{{ data.githubName }}</span>
      </a>
    </div>
    <div class="content">
      <a :href="`mailto:${data.mail}`">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>{{ data.mail }}</span>
      </a>
    </div>
    <div class="content">
      <a>
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>{{ data.qq }}</span>
      </a>
      <div class="pop"></div>
    </div>
    <div class="content">
      <a>
        <div class="icon weixin">
          <Icon type="weixin" />
        </div>
        <span>{{ data.weixin }}</span>
      </a>
      <div class="pop"></div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icons.vue";
import { mapState } from "vuex";
export default {
  components: {
    Icon,
  },

  computed: { ...mapState("setting", ["data"]) },
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
    a {
      display: flex;
    }
    &:hover {
      color: @gray;
    }
    .icon {
      font-size: 18px;
      margin: 0 10px;
    }
    span {
      font-size: 12px;
      margin-top: 3px;
    }
  }
}
</style>
