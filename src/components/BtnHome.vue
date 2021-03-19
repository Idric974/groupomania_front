<template>
  <div class="btn-appli">
    <div class="font">
      <i class="fas fa-home"></i>
    </div>

    <div class="btn-title">
      <router-link to="/home"><h3>Accueil</h3></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BtnHome",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped></style>
