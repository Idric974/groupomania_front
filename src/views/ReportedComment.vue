<template>
  <div class="ReportedComment">
    <h1>Page admin</h1>
    <BtnLogout />
    <BtnHome />
  </div>
</template>

<script>
import BtnLogout from "@/components/BtnLogout.vue";
import BtnHome from "@/components/BtnHome.vue";
export default {
  name: "ReportedComment",
  components: { BtnHome, BtnLogout },
};
</script>

<style scoped lang="scss"></style>
