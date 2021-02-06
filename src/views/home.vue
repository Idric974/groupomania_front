<template>
  <div class="home">
    <BtnVoirProfil />

    <BtnPosterContenu />
    <hr />
    <h1>Fil d'actualité</h1>
    <BoxFilActualite />
  </div>
</template>

<script>
// @ is an alias to /src

import BtnVoirProfil from "@/components/BtnVoirProfil.vue";

import BtnPosterContenu from "../components/BtnPosterContenu.vue";
import BoxFilActualite from "../components/BoxFilActualite.vue";

export default {
  components: {
    BtnVoirProfil,

    BoxFilActualite,
    BtnPosterContenu,
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
img {
  width: 150px;
}

hr {
  font-weight: bolder;
  font-size: 2rem;
}
</style>
