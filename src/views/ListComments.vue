<template>
  <!-- 👉 views ListComments 👈-->

  <div class="ListComments">
    <BtnDeconnexion />
    <BtnAccueil />
    <br />
    <hr />
    <h2>Commentaires du poste</h2>

    <div class="comments">
      <Comments :commentId="comment.id" />
    </div>
  </div>
</template>

<script>
import BtnDeconnexion from "@/components/BtnDeconnexion.vue";
import BtnAccueil from "@/components/BtnAccueil.vue";
import Comments from "@/components/Comments.vue";
export default {
  name: "ListComments",
  components: { BtnAccueil, BtnDeconnexion, Comments },
  data: () => ({
    comment: [],
  }),
};
</script>

<style scoped lang="scss">
.nav_bar {
  border-radius: 10px;
  box-shadow: black 0px 0px 5px 0px;
  padding-top: 1px;
  padding-bottom: 1px;
}

.comments {
  width: 100%;
  height: auto;
  //border: solid red 1px;
}
</style>
