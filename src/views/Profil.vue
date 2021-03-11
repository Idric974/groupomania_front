<template>
  <div class="Profil">
    <div class="btn_acc">
      <div class="btn_acc2"><BtnLogout /></div>
      <div class="btn_acc2"><BtnHome /></div>
    </div>

    <div class="composant-title">
      <h1>Mon Profil</h1>
    </div>

    <EmployeeProfile />
  </div>
</template>

<script>
import BtnLogout from "@/components/BtnLogout.vue";
import BtnHome from "@/components/BtnHome.vue";
import EmployeeProfile from "@/components/EmployeeProfile.vue";

export default {
  components: { BtnHome, BtnLogout, EmployeeProfile },
  name: "Profil",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
.composant-title {
  padding-top: 20px;
  padding-bottom: 10px;
}
</style>
