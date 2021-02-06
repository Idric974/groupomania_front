<template>
  <div class="Profil">
    <div class="menu_composant">
      <router-link to="/Home"><i class="fas fa-arrow-left"></i></router-link>
      <h1>Mon Profil</h1>
    </div>

    <ProfilSalarie />
    <Mypostsbox />
  </div>
</template>

<script>
import ProfilSalarie from "@/components/ProfilSalarie.vue";
import Mypostsbox from "../components/Mypostsbox.vue";

export default {
  components: { ProfilSalarie, Mypostsbox },
  name: "Profil",
  props: {
    msg: String,
  },
};
</script>

//<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
