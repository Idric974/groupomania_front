<template>
  <div class="Home">
    <div><Bonjour /></div>
    <div class="logo"></div>

    <div class="home-btn-menu">
      <div class="bloc">
        <div class="home-btn"><BtnLogout /></div>
        <div class="home-btn"><BtnSeeProfile /></div>
      </div>

      <div class="bloc">
        <div class="home-btn"><BtnSendContent /></div>
        <div class="home-btn"><BtnAdmin /></div>
      </div>
    </div>

    <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->

    <!--✅ 👉 Section fil d'actualité-->
    <h1>Fil d'actualité</h1>
    <div id="home"></div>
    <BoxNewsFeed />
    <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->
  </div>
</template>

<script>
import BoxNewsFeed from "../components/BoxNewsFeed.vue";
import Bonjour from "../components/Bonjour.vue";
import BtnSeeProfile from "@/components/BtnSeeProfile.vue";
import BtnSendContent from "../components/BtnSendContent.vue";
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

  methods: {},
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

#home {
  font-size: 1.5rem;
  font-weight: bolder;
  margin-top: 20px;
}

.home-btn-menu {
  justify-content: center;
  margin-bottom: 20px;

  .bloc {
    margin: auto;
  }

  @media screen and (min-width: 740px) and (max-width: 991px) {
    display: flex;
  }

  @media screen and (min-width: 992px) {
    display: flex;
  }
}
</style>
