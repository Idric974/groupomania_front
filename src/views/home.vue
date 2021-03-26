<template>
  <div class="Home">
    <div><Bonjour /></div>
    <div class="logo"></div>

    <div></div>

    <!--✅ 👉 Bouton page accueil-->
    <div class="home-btn">
      <div><BtnLogout /></div>
      <div><BtnSeeProfile /></div>
      <div><BtnSendContent /></div>
      <div><BtnAdmin /></div>
    </div>
    <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->

    <!--✅ 👉 Section fil d'actualité-->
    <h1>Fil d'actualité</h1>
    <BoxNewsFeed />
    <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->
  </div>
</template>

<script>
import Bonjour from "../components/Bonjour.vue";
import BtnSeeProfile from "@/components/BtnSeeProfile.vue";
import BtnSendContent from "../components/BtnSendContent.vue";
import BoxNewsFeed from "../components/BoxNewsFeed.vue";
import BtnLogout from "../components/BtnLogout.vue";
import BtnAdmin from "../components/BtnAdmin.vue";

export default {
  components: {
    Bonjour,
    BtnSeeProfile,
    BoxNewsFeed,
    BtnSendContent,
    BtnLogout,
    BtnAdmin,
  },
  name: "Home",
  props: {
    msg: String,
    data() {
      return {};
    },
  },

  methods: {
    test() {
      const idric = this.$store.state;
      console.log(
        "%c ✔️ User id ultime ===>>",
        "color:red ;  font-size: 15px",
        idric.loggedUser
      );
    },
  },
  mounted() {
    this.test();
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
  margin-top: 20px;

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
