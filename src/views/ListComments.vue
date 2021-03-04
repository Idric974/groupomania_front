<template>
  <!-- 👉 views ListComments 👈-->

  <div class="ListComments">
    <BtnLogout />
    <BtnHome />
    <br />
    <hr />
    <h2>Commentaires du poste</h2>

    <div class="comments">
      <Comments :commentId="comment.id" />
    </div>
  </div>
</template>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

<script>
import BtnLogout from "@/components/BtnLogout.vue";
import BtnHome from "@/components/BtnHome.vue";
import Comments from "@/components/Comments.vue";
export default {
  name: "ListComments",
  components: { BtnHome, BtnLogout, Comments },
  data: () => ({
    comment: [],
  }),
};
</script>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

<style scoped lang="scss">
.comments {
  width: 100%;
  height: auto;
}
</style>
