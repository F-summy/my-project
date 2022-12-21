//混入公共代码
export default function (content = null) {
  return {
    data() {
      return {
        isLoading: true,
        data: content,
      };
    },
    async created() {
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  };
}
