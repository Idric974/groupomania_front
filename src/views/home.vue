<template>
  <div class="Home">
    <!--⚠️ BONJOUR SECTION ⚠️-->
    <div class="bonjour-frame">
      <div><Bonjour /></div>
    </div>

    <!--⚠️ LOGO SECTION ⚠️-->
    <div class="logo-frame"></div>

    <!--⚠️ NAVIGATION SECTION ⚠️-->
    <div class="nav-frame">
      <div class="nav-block">
        <div><BtnLogout /></div>
        <div><BtnSeeProfile /></div>
      </div>

      <div class="nav-block">
        <div><BtnSendContent /></div>
        <div><BtnAdmin /></div>
      </div>
    </div>

    <!--⚠️ CONTENT SECTION ⚠️-->
    <div class="content-frame">
      <h1>Fil d'actualité</h1>
      <div id="home"></div>
      <BoxNewsFeed />
    </div>
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
