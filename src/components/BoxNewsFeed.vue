<template>
  <div class="box-news-feed">
    <NewsFeed />
  </div>
</template>

<script>
import NewsFeed from "@/components/NewsFeed.vue";
export default {
  components: { NewsFeed },
  name: "BoxNewsFeed",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
.box-news-feed {
  width: 100%;
  height: auto;
}
</style>
