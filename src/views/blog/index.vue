<template>
  <div class="article-container">
    <List @select="select" :list="list"></List>
  </div>
</template>

<script>
import List from "./list/index.vue";
export default {
  components: {
    List,
  },
  data() {
    return {
      list: [
        {
          name: "a",
          selected: false,
          children: [{ name: "a-1", selected: true }],
        },
        {
          name: "b",
          selected: false,
        },
        {
          name: "c",
          selected: false,
          children: [
            {
              name: "c-1",
              selected: false,
              children: [{ name: "c-2", selected: false }],
            },
          ],
        },
      ],
    };
  },
  methods: {
    select(item) {
      console.log(item.name);
    },
  },
};
</script>

<style></style>
