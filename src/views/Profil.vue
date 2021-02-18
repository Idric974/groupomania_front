<template>
  <div class="Profil">
    <div class="btn_acc">
      <div class="btn_acc2"><BtnDeconnexion /></div>
      <div class="btn_acc2"><BtnAccueil /></div>
    </div>

    <div class="menu_composant">
      <h1>Mon Profil</h1>
    </div>

    <ProfilSalarie />
  </div>
</template>

<script>
import BtnDeconnexion from "@/components/BtnDeconnexion.vue";
import BtnAccueil from "@/components/BtnAccueil.vue";
import ProfilSalarie from "@/components/ProfilSalarie.vue";

export default {
  components: { BtnAccueil, BtnDeconnexion, ProfilSalarie },
  name: "Profil",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss"></style>
