<template>
  <div class="btn-appli">
    <router-link to="/"
      ><h3><i class="fas fa-home"></i> Connexion</h3></router-link
    >
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
