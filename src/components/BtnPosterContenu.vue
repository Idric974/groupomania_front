<template>
  <div class="BtnPosterContenu">
    <router-link to="/Createpost"
      ><h3>
        <i class="fas fa-share-square"></i> Poster un contenu
      </h3></router-link
    >
  </div>
</template>

<script>
export default {
  name: "BtnPosterContenu",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
.BtnPosterContenu {
  border: solid black 1px;
  border-radius: 10px;
  box-shadow: black 0px 0px 5px 0px;
  margin-top: 10px;
  margin-bottom: 10px;

  a:link {
    text-decoration: none;
  }
}
</style>
