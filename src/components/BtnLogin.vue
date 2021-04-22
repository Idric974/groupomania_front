<template>
  <div class="btn-appli">
    <div class="font">
      <i class="fas fa-home"></i>
    </div>
    <div class="btn-title">
      <router-link to="/"><h3>Connexion</h3></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BtnLogin",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped></style>
