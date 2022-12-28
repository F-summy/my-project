import { getSetting } from "../aip";
import { setStoreTitle } from "../utils/title";
export default {
  namespaced: true,
  state: {
    loading: false,
    data: [],
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setDate(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    async fetchSetting(ctx) {
      if (ctx.state.data.length) {
        return;
      }
      ctx.commit("setLoading", true);
      const res = await getSetting();
      ctx.commit("setDate", res);
      ctx.commit("setLoading", false);
      //网页图标
      //   <link rel="shortcut icon " type="images/x-icon" href="./favicon.ico"></link>
      let link = document.querySelector("link[rel='shortcut icon']");
      if (link) return;

      let icon = document.querySelector("link[rel='icon']");
      icon.remove();
      link = document.createElement("link");
      link.rel = "shortcut icon";
      link.type = "images/x-icon";
      link.href = res.favicon;
      document.querySelector("head").appendChild(link);
      //设置网页标题
      if (res.siteTitle) {
        setStoreTitle(res.siteTitle);
      }
    },
  },
};
