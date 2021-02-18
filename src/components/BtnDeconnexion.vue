<template>
  <div class="btnAppli">
    <router-link to="/"
      ><h3><i class="fas fa-sign-out-alt"></i> Me déconnecter</h3></router-link
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
