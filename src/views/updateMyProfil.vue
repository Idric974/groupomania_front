<template>
  <div class="Profil">
    <div class="btn_acc">
      <div class="btn_acc2"><BtnLogout /></div>
      <div class="btn_acc2"><BtnHome /></div>
    </div>

    <div class="composant-title">
      <h1>Modifier mon profile</h1>
    </div>

    <updateprofil />
  </div>
</template>

<script>
import BtnLogout from "@/components/BtnLogout.vue";
import BtnHome from "@/components/BtnHome.vue";
import updateprofil from "@/components/updateprofil.vue";

export default {
  components: { BtnHome, BtnLogout, updateprofil },
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
