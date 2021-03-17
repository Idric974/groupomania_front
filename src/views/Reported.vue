<template>
  <div class="ReportedComment">
    <h1 class="admin">Page administration</h1>
    <BtnLogout />
    <BtnHome />
    <br />
    <hr />

    <div class="repoted-object">
      <h2 class="repoted-title">Liste des postes signalés</h2>

      <div class="post" v-for="post in posts" :key="post.id">
        <div class="alias">
          Publié par : {{ post.user.name }} {{ post.user.firstname }}
        </div>

        <div class="formated-date">{{ post.formatedDate }}</div>

        <div class="title">Titre : {{ post.title }}</div>

        <div class="content">
          {{ post.content }}
        </div>
        <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->
      </div>
    </div>
  </div>
</template>

<script>
import BtnLogout from "@/components/BtnLogout.vue";
import BtnHome from "@/components/BtnHome.vue";
import { FORMAT_DATE } from "../services/utilities";
export default {
  name: "Reported",
  components: { BtnHome, BtnLogout },
  data: () => ({
    posts: [],
    state: "",
  }),

  methods: {
    //* ✅ 👉 Afficher tous les postes.
    readAllReported() {
      const userIdStorage = localStorage.getItem("groupomania");
      const objJson = JSON.parse(userIdStorage);
      const token = objJson.token;

      const userId = objJson.userId;

      //* ✅ 👉 Définition des en-têtes.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/post/readAllReported/";
      console.log(url);

      const values = {
        userId: userId,
        token: token,
      };
      console.log(values);
      const body = JSON.stringify(values);

      //* ✅ 👉 Définition des paramètres de la requête.
      const parametresDeRequete = {
        method: "POST",
        headers: headers,
        body: body,
      };

      fetch(url, parametresDeRequete)
        .then((success) => {
          success.json().then((result) => {
            this.posts = result.posts.map((post) => {
              post.formatedDate = FORMAT_DATE(post.createdAt);

              return post;
            });
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
  },
  mounted() {
    this.readAllReported();
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
    .title,
    .content {
      padding-top: 10px;
      padding-bottom: 10px;
      font-size: 1.2rem;
      font-weight: bolder;
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
</style>
