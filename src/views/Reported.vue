<template>
  <div class="ReportedComment">
    <div class="ReportedComment-nav">
      <h1 class="page-title">Page administration</h1>
      <BtnLogout />
      <BtnHome />
    </div>

    <div class="container">
      <div class="container-onglets">
        <div id="onglets " class="active" @click="reportedPOst()">
          Postes
        </div>
        <div id="onglets" @click="reportedComment()">
          Commentaires
        </div>
      </div>

      <div class="content ">
        <div id="postContent">
          <ReportedPost />
        </div>

        <div id="commentContent">
          <ReportedComment />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BtnLogout from "@/components/BtnLogout.vue";
import BtnHome from "@/components/BtnHome.vue";
import ReportedPost from "@/components/ReportedPost.vue";
import ReportedComment from "@/components/ReportedComment.vue";

export default {
  name: "Reported",
  state: "0",
  components: { BtnHome, BtnLogout, ReportedPost, ReportedComment },
  methods: {
    reportedComment() {
      var postContent = document.getElementById("postContent");
      postContent.style.opacity = "0";

      var commentContent = document.getElementById("commentContent");
      commentContent.style.opacity = "1";
    },

    reportedPOst() {
      var postContent = document.getElementById("postContent");
      postContent.style.opacity = "1";

      var commentContent = document.getElementById("commentContent");
      commentContent.style.opacity = "0";
    },
  },
};
</script>

<style scoped lang="scss">
.ReportedComment {
  width: 100%;
  display: flex;
  flex-direction: column;

  .ReportedComment-nav {
    margin-top: 20px;
    margin-bottom: 20px;

    .page-title {
      margin-top: 10px;
      margin-bottom: 20px;
    }
  }

  .container {
    width: 100%;

    .container-onglets {
      width: 100%;
      height: 40px;
      display: flex;
      border-bottom: 1px solid #333;

      #onglets {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.3rem;
        font-weight: bolder;
        cursor: pointer;
        border-radius: 10px 10px 0px 0px;
        background-color: #333;
        color: white;
      }

      .active {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.3rem;
        font-weight: bolder;
        cursor: pointer;
        border-radius: 10px 10px 0px 0px;
        background-color: blue;
        color: white;
        border: brown;
      }
    }

    .content {
      width: 100%;
      height: 50px;
      position: relative;

      #postContent {
        position: absolute;
        opacity: 1;
      }

      #commentContent {
        position: absolute;
        opacity: 0;
      }
    }
  }
}
</style>
