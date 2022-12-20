<template>
  <div class="home-container" ref="home" @wheel="handleWheel">
    <ul
      class="image"
      :style="{ marginTop: marginTop }"
      @transitionend="animationEnd"
    >
      <li v-for="item in banner" :key="item.id" class="item">
        <Carouselitem :data="item"></Carouselitem>
      </li>
    </ul>
    <!-- 上下箭头 -->
    <div class="icon-up" v-show="index > 0" @click="changeImage(index - 1)">
      <Icons type="arrowUp"></Icons>
    </div>
    <div
      class="icon-down"
      v-show="index < banner.length - 1"
      @click="changeImage(index + 1)"
    >
      <Icons type="arrowDown"></Icons>
    </div>
    <!-- 点 -->
    <ul class="indicator">
      <li
        @click="changeImage(i)"
        :class="{ active: i == index }"
        v-for="(item, i) in banner"
        :key="item.id"
      ></li>
    </ul>
  </div>
</template>

<script>
import Icons from "../../components/Icons.vue";
import { getBanner } from "../../aip";
import Carouselitem from "./Carouselitem.vue";
export default {
  components: {
    Carouselitem,
    Icons,
  },
  async created() {
    this.banner = await getBanner();
  },
  mounted() {
    this.containerHeight = this.$refs.home.clientHeight;
    window.addEventListener("resize", this.updateContainer);
  },
  destroyed() {
    window.removeEventListener("resize", this.updateContainer);
  },
  data() {
    return {
      banner: [],
      index: 0,
      containerHeight: 0,
      animation: false,
    };
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
  methods: {
    changeImage(i) {
      this.index = i;
    },
    //监听鼠标滚动
    handleWheel(e) {
      if (this.animation) return;
      if (e.deltaY > 0 && this.index < this.banner.length - 1) {
        this.index++;
        this.animation = true;
      }
      if (e.deltaY < 0 && this.index > 0) {
        this.animation = true;
        this.index--;
      }
    },
    //监听动画结束
    animationEnd() {
      this.animation = false;
    },
    //当窗口发生变化时调整
    updateContainer() {
      this.containerHeight = this.$refs.home.clientHeight;
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../style/var.less";
.home-container {
  ul {
    margin: 0;
    padding: 0;
  }
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .image {
    width: 100%;
    height: 100%;
    transition: 0.5s;
  }
  .image li {
    width: 100%;
    height: 100%;
  }
  .icon-down,
  .icon-up {
    position: absolute;
    left: 50%;
    z-index: 999;
    top: 20px;
    font-size: 28px;
    color: @lightWords;
    cursor: pointer;
    animation: jump-up 2s infinite;
  }
  .icon-down {
    top: auto;
    bottom: 20px;
    animation: jump-down 2s infinite;
  }
  @keyframes jump-up {
    0% {
      transform: translate(-50%, 5px);
    }
    50% {
      transform: translate(-50%, -5px);
    }
    100% {
      transform: translate(-50%, 5px);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -5px);
    }
    50% {
      transform: translate(-50%, 5px);
    }
    100% {
      transform: translate(-50%, -5px);
    }
  }
  .indicator {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    list-style: none;
    li {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: @words;
      cursor: pointer;
      margin-bottom: 10px;
      border: 1px solid #fff;
      &.active {
        background: #fff;
      }
    }
  }
}
</style>
