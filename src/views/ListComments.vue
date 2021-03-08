<template>
  <!-- 👉 views ListComments 👈-->

  <div class="ListComments">
    <BtnLogout />
    <BtnHome />
    <br />
    <hr />

    <div class="selected-post">
      <h1>Poste sélectionné</h1>
      <selectedPost />
    </div>

    <div class="comments">
      <h2>Commentaires sur ce poste</h2>
      <Comments :commentId="comment.id" />
    </div>
  </div>
</template>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

<script>
import BtnLogout from "@/components/BtnLogout.vue";
import BtnHome from "@/components/BtnHome.vue";
import Comments from "@/components/Comments.vue";
import SelectedPost from "../components/SelectedPost.vue";
export default {
  name: "ListComments",
  components: { BtnHome, BtnLogout, Comments, SelectedPost },
  data: () => ({
    comment: [],
  }),
};
</script>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

<style scoped lang="scss">
.comments {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.selected-post {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
}

h2 {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
