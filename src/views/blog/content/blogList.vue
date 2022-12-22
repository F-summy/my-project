<template>
  <div class="blog-list-container" ref="container" v-loading="isLoading">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <router-link
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <img :src="item.thumb" :alt="item.title" :title="item.title" />
          </router-link>
        </div>
        <div class="main">
          <router-link
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <h2>{{ item.title }}</h2>
          </router-link>
          <div class="aside">
            <span>日期：{{ formate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <router-link
              :to="{
                name: 'CalssBlog',
                params: {
                  id: item.category.id,
                },
              }"
              >{{ item.category.name }}</router-link
            >
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页放到这里 -->
    <Pager
      v-if="data.total"
      :total="data.total"
      :current="routeData.page"
      :limit="routeData.limit"
      :visibleNumber="10"
      @changePage="changePage"
    ></Pager>
  </div>
</template>
<script>
import fetchData from "../../../mixins";
import Pager from "../../../components/Pages.vue";
import { getBlog } from "../../../aip";
import formate from "../../../utils/formate";
export default {
  mixins: [fetchData({})],
  components: {
    Pager,
  },

  watch: {
    async $route() {
      this.isLoading = true;

      this.$refs.container.scrollTop = 0;
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  },
  computed: {
    routeData() {
      return {
        page: +this.$route.query.page || 1,
        limit: +this.$route.query.limit || 15,
        id: +this.$route.params.id || -1,
      };
    },
  },
  methods: {
    formate,
    async fetchData() {
      return await getBlog(
        this.routeData.page,
        this.routeData.limit,
        this.routeData.id
      );
    },
    changePage(index) {
      const query = {
        page: index,
        limit: this.routeData.limit,
      };
      if (this.routeData.id === -1) {
        this.$router.push({ name: "Blog", query });
      } else {
        this.$router.push({
          name: "CalssBlog",
          query,
          params: {
            id: this.routeData.id,
          },
        });
      }
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/style/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>
