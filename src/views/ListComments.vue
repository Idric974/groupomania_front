<template>
  <!-- 👉 views ListComments 👈-->

  <div class="ListComments">
    <div class="ajust"><Bonjour /></div>

    <BtnLogout />
    <BtnHome />
    <br />
    <hr />

    <div class="selected-post">
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
import Bonjour from "../components/Bonjour.vue";
import BtnLogout from "@/components/BtnLogout.vue";
import BtnHome from "@/components/BtnHome.vue";
import Comments from "@/components/Comments.vue";
import SelectedPost from "../components/SelectedPost.vue";
export default {
  components: { BtnHome, BtnLogout, Comments, SelectedPost, Bonjour },
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

.ajust {
  margin-bottom: 50px;
}
</style>
