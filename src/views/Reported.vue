<template>
  <div class="ReportedComment">
    <h1 class="admin">Page administration</h1>
    <BtnLogout />
    <BtnHome />
    <br />

    <hr />

    <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->
    <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->

    <div class="container">
      <div class="container-onglets">
        <div class="onglets active" data-anim="1">Postes</div>
        <div class="onglets" data-anim="2">Commentaires</div>
      </div>

      <div class="contenu activeContenu" data-anim="1">
        <ReportedPost />
      </div>

      <div class="contenu" data-anim="2">
        <ReportedComment />
      </div>
    </div>

    <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->
    <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->

    <!-- <div>
      <ReportedPost />
    </div>

    <div>
      <ReportedComment />
    </div> -->
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
    tab() {},

    mounted() {
      this.tab();
    },
  },
};
</script>

<style scoped lang="scss">
.admin {
  margin-top: 10px;
  margin-bottom: 20px;
}

.repoted-object {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;

  .repoted-title {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .post {
    margin-top: 10px;
    margin-bottom: 10px;
    padding-bottom: 20px;
    background-color: rgba(180, 207, 243, 0.8);
    box-shadow: #1e3d59 0px 0px 10px 5px;
    border-radius: 10px;

    @media screen and (min-width: 742px) and (max-width: 991px) {
    }

    @media screen and (min-width: 992px) {
      margin-left: auto;
      margin-right: auto;
      width: 80%;
    }
    .alias,
    .formated-date,
    .title {
      padding-top: 10px;
      padding-bottom: 10px;
      font-size: 1.2rem;
      font-weight: bolder;
    }

    .content {
      padding-top: 10px;
      padding-bottom: 10px;
      font-size: 1.2rem;
    }
  }

  .content {
    width: 95%;
    min-height: 100px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 1.1rem;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
  }
}

//******************************************************** */

.container {
  width: 100%;
  height: 300px;
  background: #f1f1f1;
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.container-onglets {
  background: #f1f1f1;
  width: 100%;
  height: 30%;
  display: flex;
  border-bottom: 1px solid #333;
}
.onglets {
  width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
}
.onglets:not(:nth-child(2)) {
  border-right: 1px solid #333;
}

.contenu {
  height: 70%;
  width: 100%;
  position: absolute;
  opacity: 0;
}
.contenu h3 {
  padding: 20px;
}
.contenu hr {
  width: 20%;
  height: 2px;
  margin-left: 20px;
  background: #000;
  border: none;
}
.contenu p {
  padding: 20px;
}

/* Anim */

.active {
  background: midnightblue;
  color: #f1f1f1;
  transition: all 0.3s ease;
}

.activeContenu {
  animation: fade 0.5s forwards;
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
