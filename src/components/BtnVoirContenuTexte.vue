<template>
  <div class="BtnVoirContenuTexte">
    <router-link to="/Texte"
      ><h3>
        <i class="fas fa-file-alt"></i> Voir le contenus Texte
      </h3></router-link
    >
  </div>
</template>

<script>
export default {
  name: "BtnVoirContenuTexte",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
.BtnVoirContenuTexte {
  border: solid black 1px;
  border-radius: 10px;
  box-shadow: black 0px 0px 10px 5px;
  margin-top: 10px;
  margin-bottom: 10px;

  a:link {
    text-decoration: none;
  }
}
</style>
