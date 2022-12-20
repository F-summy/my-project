<template>
  <div class="carouse-item">
    <ImageLoad
      @updateImage="updateDom"
      :src="data.bigImg"
      :placeholder="data.midImg"
    ></ImageLoad>
    <div ref="title" class="title">{{ data.title }}</div>
    <div ref="description" class="description">{{ data.description }}</div>
  </div>
</template>

<script>
import ImageLoad from "../../components/ImageLoad.vue";
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      titeWidth: null,
      descriptionWidth: null,
    };
  },
  components: {
    ImageLoad,
  },
  mounted() {
    this.titeWidth = this.$refs.title.clientWidth;
    this.descriptionWidth = this.$refs.description.clientWidth;
  },
  methods: {
    updateDom() {
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = 0;
      this.$refs.title.style.opacity = 1;

      this.$refs.title.clientWidth; //重新渲染

      this.$refs.title.style.width = this.titeWidth + "px";

      this.$refs.description.style.transition = "2s 1s";
      this.$refs.description.style.width = 0;
      this.$refs.description.style.opacity = 1;

      this.$refs.description.clientWidth; //重新渲染

      this.$refs.description.style.width = this.descriptionWidth + "px";
    },
  },
};
</script>

<style lang="less" scoped>
.carouse-item {
  width: 100%;
  height: 100%;
  background: #000;
  color: #fff;
  position: relative;
  .title,
  .description {
    position: absolute;
    top: 50%;
    left: 10px;
    z-index: 10;
    font-size: 2em;
    letter-spacing: 3px;
    text-shadow: 1px 0 #666;
    opacity: 0;
    white-space: nowrap;
    overflow: hidden;
  }
  .description {
    top: 58%;
    font-size: 1.2em;
  }
}
</style>
