<template>
  <!-- 👉 Components FilActualite 👈-->

  <div class="news-feed">
    <!-- ✅ 👉 Affichage du pseudo et du post-->

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

      <!-- ✅ 👉 Bouton pour lire les commentaires. -->
      <div class="btnReadComment">
        <router-link :to="{ name: 'ListComments', params: { id: post.id } }"
          ><button class="large">
            Lire la suite du poste
          </button></router-link
        >
      </div>

      <!-- ✅ 👉 Afficher div boutons modifier et supprimer post.-->
      <div class="setup-button" v-if="state == 'admin'">
        <button type="submit" v-on:click="deletPost(post.id)" class="small">
          Supprimer
        </button>
      </div>
      <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->
    </div>
  </div>
</template>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

<script>
import { FORMAT_DATE } from "../services/utilities";
export default {
  name: "NewsFeed",
  data: () => ({
    posts: [],
    state: "",
  }),
  methods: {
    //* ✅ 👉 Afficher tous les postes.
    readAllPosts() {
      const userIdStorage = localStorage.getItem("groupomania");
      const objJson = JSON.parse(userIdStorage);
      const token = objJson.token;

      //* ✅ 👉 Définition des en-têtes.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/post/readAllPosts";

      //* ✅ 👉 Définition des paramètres de la requête.
      const parametresDeRequete = {
        method: "GET",
        headers: headers,
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
    this.readAllPosts();
  },
};
</script>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

<style lang="scss" scoped>
.news-feed {
  width: 100%;
  display: auto;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;

  .post {
    margin-top: 20px;
    margin-bottom: 20px;
    box-shadow: #1e3d59 0px 0px 10px 5px;
    border-radius: 10px;
    background-color: rgba(180, 207, 243, 0.8);

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
      width: 100%;
      font-size: 1.5rem;
      font-weight: bolder;
      margin-left: auto;
      margin-right: auto;
      border-radius: 10px 10px 0px 0px;
      padding: 10px 0px 10px 0px;
    }

    .content {
      width: 95%;
      height: 30px;
      padding-top: 10px;
      padding-bottom: 10px;
      font-size: 1.3rem;
      background-color: white;
      margin-left: auto;
      margin-right: auto;
      border-radius: 10px;
      overflow: hidden;
    }
  }

  .setup-button {
    width: 100%;
  }
}
</style>
