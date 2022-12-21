<template>
  <div
    class="carouse-item"
    ref="home"
    @mousemove="mousemove"
    @mouseleave="mouseleave"
  >
    <div class="item" ref="image" :style="imageMove">
      <ImageLoad
        @updateImage="updateDom"
        :src="data.bigImg"
        :placeholder="data.midImg"
      ></ImageLoad>
    </div>
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
      //尺寸数据
      containerData: null,
      imageData: null,
      mouse: null,
    };
  },
  components: {
    ImageLoad,
  },
  mounted() {
    this.titeWidth = this.$refs.title.clientWidth;
    this.descriptionWidth = this.$refs.description.clientWidth;
    this.getSize();
    window.addEventListener("resize", this.getSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.getSize);
  },
  computed: {
    imageMove() {
      //最大距离
      if (!this.containerData || !this.imageData || !this.mouse) return;
      const X = this.imageData.width - this.containerData.width;
      const Y = this.imageData.height - this.containerData.height;

      const left = (-X / this.containerData.width) * this.mouse.left;
      const top = (-Y / this.containerData.height) * this.mouse.top;
      return {
        transform: `translate(${left}px, ${top}px)`,
      };
    },
    center() {
      return {
        left: this.containerData.width / 2,
        top: this.containerData.height / 2,
      };
    },
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
    //鼠标移动
    mousemove(e) {
      const rect = this.$refs.home.getBoundingClientRect();
      this.mouse = {
        left: e.clientX - rect.left,
        top: e.clientY - rect.top,
      };
    },
    //鼠标移出
    mouseleave() {
      this.mouse.left = this.center.left;
      this.mouse.top = this.center.top;
    },
    getSize() {
      //父容器尺寸
      this.containerData = {
        width: this.$refs.home.clientWidth,
        height: this.$refs.home.clientHeight,
      };

      //图片尺寸
      this.imageData = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight,
      };

      //鼠标默认尺寸
      this.mouse = {
        left: this.center.left,
        top: this.center.top,
      };
    },
  },
};
</script>

<style lang="less" scoped>
.carouse-item {
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: #fff;
  position: relative;
  .item {
    width: 110%;
    height: 110%;
    transition: 0.3s;
  }
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
