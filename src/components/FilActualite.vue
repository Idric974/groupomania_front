<template>
  <div class="Filactualite">
    <div class="utilisateur_box">
      <div class="photo_utilisateur"></div>
      <div class="nom_utilisateur">Allie Patou</div>
    </div>

    <div class="contenu">
      <div class="texte">
        Intrinsicly visualize go forward systems rather than turnkey content.
        Enthusiastically reintermediate mission-critical experiences before
        fully tested users. Credibly procrastinate front-end value without
        effective data. Quickly utilize go forward benefits after client-centric
        leadership. Interactively.
      </div>
      <div class="multimedia"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filactualite",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
.Filactualite {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  box-shadow: black 0px 0px 10px 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  //border: solid red 1px;
  background-color: rgb(212, 207, 207);

  .utilisateur_box {
    border-radius: 10px 10px 0px 0px;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;

    .photo_utilisateur {
      background-image: url("../assets/persona/Allie_Patou.png");
      background-size: cover;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin: 5px;
    }

    .nom_utilisateur {
      font-size: 1.2rem;
      font-weight: bolder;
      margin: 5px 0px 5px 20px;
    }
  }

  .contenu {
    width: 100%;
    height: auto;
    border-radius: 0px 0px 10px 10px;

    .texte {
      font-size: 1rem;
    }
    .multimedia {
      width: 100%;
      height: auto;
      border-top: solid black 3px;

      .multimedia_img {
        width: 100%;
        height: auto;
        border-radius: 0px 0px 10px 10px;
      }
    }
  }
}

img {
  width: 100px;
}
</style>
