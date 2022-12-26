<template>
  <div class="message-area-container">
    <DataForm v-on="$listeners" />
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>
    <DataList :list="list"></DataList>
  </div>
</template>

<script>
import DataForm from "./DataForm";
import DataList from "./DataList";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    DataForm,
    DataList,
  },
};
</script>

<style scoped lang="less"></style>
