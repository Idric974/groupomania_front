<template>
  <div class="Reported">
    <!--⚠️ BONJOUR SECTION ⚠️-->
    <div class="bonjour-frame">
      <div><Bonjour /></div>
    </div>

    <br />

    <div class="menu_composant">
      <h1 class="page-title">Page administration</h1>
    </div>

    <!--✅ 👉 navigation section-->
    <div class="nav-frame">
      <div class="nav-block">
        <BtnLogout />
        <BtnHome />
      </div>
    </div>

    <div class="content-frame">
      <div class="container">
        <div class="container-onglets">
          <div id="postOnglet" @click="reportedPost()">
            Postes
          </div>
          <div id="commentOnglet" @click="reportedComment()">
            Commentaires
          </div>
        </div>

        <div class="content">
          <div id="postContent">
            <ReportedPost />
          </div>

          <div id="commentContent">
            <ReportedComment />
          </div>
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
import Bonjour from "../components/Bonjour.vue";

export default {
  name: "Reported",
  state: "0",
  components: { BtnHome, BtnLogout, ReportedPost, ReportedComment, Bonjour },
  methods: {
    reportedComment() {
      let commentOnglet = document.getElementById("commentOnglet");
      commentOnglet.style.border = "solid rgb(253, 45, 1) 2px";

      let postOnglet = document.getElementById("postOnglet");
      postOnglet.style.border = "solid #333 1px";

      let postContent = document.getElementById("postContent");
      postContent.style.opacity = "0";

      let commentContent = document.getElementById("commentContent");
      commentContent.style.opacity = "1";
    },

    reportedPost() {
      let commentOnglet = document.getElementById("commentOnglet");
      commentOnglet.style.border = "solid #333 1px";

      let postOnglet = document.getElementById("postOnglet");
      postOnglet.style.border = "solid rgb(253, 45, 1) 2px";

      let postContent = document.getElementById("postContent");
      postContent.style.opacity = "1";

      let commentContent = document.getElementById("commentContent");
      commentContent.style.opacity = "0";
    },
  },
};
</script>

<style scoped lang="scss">
.Reported {
  width: 100%;

  .Reported-nav {
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

      #postOnglet,
      #commentOnglet {
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

      #postOnglet {
        border: solid rgb(253, 45, 1) 2px;
      }
    }

    .content {
      width: 100%;
      height: 50px;
      position: relative;

      #postContent {
        width: 100%;
        position: absolute;
        opacity: 1;
      }

      #commentContent {
        width: 100%;
        position: absolute;
        opacity: 0;
      }
    }
  }
}
</style>
