<template>
  <div class="BoxFilActualite">
    <FilActualite />
    <FilActualite />
  </div>
</template>

<script>
import FilActualite from "@/components/FilActualite.vue";
export default {
  components: { FilActualite },
  name: "BoxFilActualite",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
.BoxFilActualite {
  width: 100%;
  height: 500px;
}
</style>
