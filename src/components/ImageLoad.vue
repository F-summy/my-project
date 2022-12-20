<template>
  <div class="image-load-container">
    <img v-if="deImage" :src="placeholder" class="placeholder" />
    <img
      @load="isLoad"
      :src="src"
      :style="{ opacity: isShow ? 1 : 0, transition: duration + 's' }"
      class="src"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 0.5,
    },
  },
  data() {
    return {
      Show: false,
      deImage: true,
    };
  },
  methods: {
    isLoad() {
      this.Show = true;
      this.$emit("updateImage");
      this.deImage = false;
    },
  },
  computed: {
    isShow() {
      return this.Show;
    },
  },
};
</script>

<style lang="less" scoped>
.image-load-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  .placeholder,
  .src {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  .placeholder {
    filter: blur(2vw);
  }
}
</style>
