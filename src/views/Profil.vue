<template>
  <div class="Profil">
    <!--⚠️ NAVIGATION SECTION ⚠️-->
    <div class="nav-frame">
      <div class="nav-block">
        <div><BtnLogout /></div>
        <div><BtnHome /></div>
      </div>
    </div>

    <!--⚠️ CONTENT SECTION ⚠️-->
    <div class="content-frame">
      <div class="composant-title">
        <h1>Mon Profil</h1>
      </div>
      <EmployeeProfile />
    </div>
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
