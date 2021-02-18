<template>
  <div class="btnAppli">
    <router-link to="/home"
      ><h3><i class="fas fa-home"></i> Accueil</h3></router-link
    >
  </div>
</template>

<script>
export default {
  name: "btnAppli",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped></style>
