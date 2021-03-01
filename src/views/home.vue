<template>
  <!-- 👉 views home 👈-->

  <div class="home">
    <div class="logo"></div>

    <!--✅ 👉 Bouton page accueil-->
    <div class="btn_acc">
      <div><btn-deconnexion /></div>
      <div><BtnVoirProfil /></div>
      <div><BtnPosterContenu /></div>
    </div>
    <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->

    <!--✅ 👉 Section fil d'actualité-->
    <h1>Fil d'actualité</h1>
    <BoxFilActualite />
    <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->
  </div>
</template>

<script>
import BtnVoirProfil from "@/components/BtnVoirProfil.vue";
import BtnPosterContenu from "../components/BtnPosterContenu.vue";
import BoxFilActualite from "../components/BoxFilActualite.vue";
import BtnDeconnexion from "../components/BtnDeconnexion.vue";

export default {
  components: {
    BtnVoirProfil,
    BoxFilActualite,
    BtnPosterContenu,
    BtnDeconnexion,
  },
  name: "home",
  props: {
    msg: String,
    data() {
      return {};
    },
  },
};
</script>

//<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.logo {
  background-image: url("../assets/icon-above-font.png");
  width: 60%;
  height: 150px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 740px) and (max-width: 991px) {
    width: 50%;
    height: 300px;
  }

  @media screen and (min-width: 992px) {
    width: 30%;
    height: 300px;
  }
}
</style>
