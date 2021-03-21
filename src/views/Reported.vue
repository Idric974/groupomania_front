<template>
  <div class="ReportedComment">
    <div class="ReportedComment-nav">
      <h1 class="page-title">Page administration</h1>
      <BtnLogout />
      <BtnHome />
    </div>

    <div class="container">
      <div class="container-onglets">
        <div class="onglets active" v-on:click.prevent="showTabComment()">
          Postes
        </div>
        <div class="onglets" v-on:click.prevent="showTabPost()">
          Commentaires
        </div>
      </div>

      <div class="post-contenu  ">
        <ReportedPost />
      </div>

      <div class="comment-contenu">
        <ReportedComment />
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
  components: { BtnHome, BtnLogout, ReportedPost, ReportedComment },
  methods: {
    showTabComment() {
      let tabComment = document.getElementsByClassName("post-contenu");
      tabComment.classList.add("post-contenu");
      console.log(tabComment);
    },
    showTabPost() {
      let tabPost = document.getElementsByClassName("post-contenu");
      tabPost.classList.add("comment-contenu");
      console.log(tabPost);
    },
  },
  // mounted() {
  //   this.showTabComment();
  //   this.showTabPost();
  // },
};
</script>

<style scoped lang="scss">
.ReportedComment {
  width: 100%;

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
    height: 300px;

    .container-onglets {
      width: 100%;
      height: 20%;
      display: flex;
      border-bottom: 1px solid #333;

      .onglets {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.3rem;
        font-weight: bolder;
        cursor: pointer;

        .onglets:not(:nth-child(2)) {
          border-right: 1px solid #333;
        }
      }

      .active {
        background: midnightblue;
        color: #f1f1f1;
        transition: all 0.3s ease;
      }
    }

    .contenu {
      width: 97%;
      position: absolute;
      //opacity: 1;

      // @keyframes fade {
      //   from {
      //     opacity: 0;
      //   }
      //   to {
      //     opacity: 0;
      //   }
      // }
    }

    // .activeContenu {
    //   animation: fade 0.5s forwards;
    // }
  }

  .comment-contenu {
    opacity: 1;
  }

  .post-contenu {
    opacity: 1;
  }
}
</style>
