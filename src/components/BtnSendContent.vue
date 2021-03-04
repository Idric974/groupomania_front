<template>
  <div class="btn-appli">
    <router-link to="/Createpost"
      ><h3>
        <i class="fas fa-share-square"></i> Poster un contenu
      </h3></router-link
    >
  </div>
</template>

<script>
export default {
  name: "BtnSendContent",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped></style>
