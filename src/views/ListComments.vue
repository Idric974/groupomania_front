<template>
  <div class="ListComments">
    <div class="nav_bar">
      <router-link to="/Home">
        <h2>
          <i class="fas fa-arrow-left"></i>
          Retour accueil
        </h2></router-link
      >
    </div>

    <h2>↙️ Commentaires du poste ↘️</h2>
    <hr />
    <div class="comments">
      <h2>Commentaires des lecteurs</h2>
      <Comments />
    </div>
  </div>
</template>

<script>
import Comments from "../components/Comments";
export default {
  name: "ListComments",
  components: { Comments },
  data: () => ({
    posts: [],
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
  height: 500px;
  border: solid red 1px;
}
</style>
