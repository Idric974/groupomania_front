<template>
  <div class="Profil">
    <!--⚠️ NAVIGATION SECTION ⚠️-->
    <div class="nav-frame">
      <div class="nav-block">
        <div><BtnLogout /></div>
        <div><BtnHome /></div>
      </div>

      <div class="nav-block">
        <div><BtnRetour /></div>
      </div>
    </div>

    <div class="composant-title">
      <h1>Modifier mon profile</h1>
    </div>

    <!--⚠️ CONTENT SECTION ⚠️-->
    <div class="content-frame">
      <updateprofil />
    </div>
  </div>
</template>

<script>
import BtnLogout from "@/components/BtnLogout.vue";
import BtnHome from "@/components/BtnHome.vue";
import BtnRetour from "@/components/BtnRetour.vue";
import updateprofil from "@/components/updateprofil.vue";

export default {
  components: { BtnHome, BtnLogout, updateprofil, BtnRetour },
  name: "updateMyProfil",
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
