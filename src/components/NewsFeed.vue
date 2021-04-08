<template>
  <!-- 👉 Components FilActualite 👈-->

  <div class="news-feed">
    <!-- ✅ 👉 Affichage du pseudo et du post-->

    <div class="feed" v-for="post in posts" :key="post.id">
      <div class="post">
        <div class="alias" v-if="firstname != null">
          <i class="fas fa-user"></i>{{ post.user.name }}
          {{ post.user.firstname }}
        </div>

        <div class="formated-date">{{ post.formatedDate }}</div>

        <div class="title">Titre : {{ post.title }}</div>

        <div class="content">
          {{ post.content }}
        </div>
      </div>
      <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->

      <!-- ✅ 👉 Bouton pour lire les commentaires. -->
      <div class="new-feed-button">
        <div class="btnReadComment">
          <router-link :to="{ name: 'ListComments', params: { id: post.id } }"
            ><button class="large">
              Lire la suite du poste
            </button></router-link
          >
        </div>

        <!-- ✅ 👉 Afficher div boutons modifier et supprimer post.-->
        <div class="setup-button" v-if="admin === true">
          <button
            type="submit"
            v-on:click="deletPost(post.id)"
            class="small color"
          >
            Supprimer
          </button>
        </div>
      </div>
      <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->
    </div>
  </div>
</template>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

<script>
import { FORMAT_DATE } from "../services/utilities";
import { mapState } from "vuex";

export default {
  name: "NewsFeed",

  data: () => ({
    posts: [],
    state: "",
  }),

  computed: {
    ...mapState([
      "firstname",
      "name",
      "alias",
      "userId",
      "admin",
      "id",
      "email",
    ]),
  },

  methods: {
    //* ✅ 👉 Afficher tous les postes.
    readAllPosts() {
      const storageToken = localStorage.getItem("groupomania");
      const objJson = JSON.parse(storageToken);
      const token = objJson.token;

      let userId = this.$store.state.id;

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
            result.posts.forEach((item, index) => {
              this.post = result.posts;

              console.log(
                "%cPost Index",
                "color:green ;  font-size: 15px",
                index
              );

              console.log("userId Item = ", item.userId);
              console.log("Logged userId = ", userId);

              if (result.posts.length >= 1) {
                this.state === 1;
                console.log("Nombre de post dans le fil", result.posts.length);
              }

              // if (item.userId === userId) {
              //   console.log("✔️ This is a logged post user");
              //   this.admin = 1;
              //   console.log(this.admin);
              // }

              if (result.posts.length == 0) {
                console.log("Pas de poste à afficher");

                let home = document.getElementById("home");
                home.innerHTML = `Pas de poste à afficher 😃`;
              }
            });
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

    //* ✅ 👉 Supprimer le poste sélectionné.
    deletPost(id) {
      const storageToken = localStorage.getItem("groupomania");
      const objJson = JSON.parse(storageToken);
      const token = objJson.token;

      let userId = this.$store.state.userId;

      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json");

      //* ✅ 👉 Définition du body de la requête.
      const values = {
        userId: userId,
        token: token,
      };

      const body = JSON.stringify(values);

      //* ✅ 👉 Définition des paramètres de la requête.
      const parametresDeRequete = {
        method: "POST",
        headers: headers,
        body: body,
      };

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/post/deletePost/" + id;

      fetch(url, parametresDeRequete)
        .then(function(response) {
          if (response.status !== 200) {
            console.log("Poste supprimé: 👍 👍 👍" + response.status);

            return;
          }

          response.json().then(function(data) {
            console.log(data);

            alert("⚠️ Votre poste a été Supprimé ⚠️");
            window.location.reload();
          });
        })
        .catch(function(err) {
          console.log("Catch erreur dans la requête ⚠️ ⚠️ ⚠️", err);
        });
    },
    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
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

  .feed {
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
      font-size: 1.3rem;
      font-weight: bolder;
      margin-left: auto;
      margin-right: auto;
      border-radius: 10px 10px 0px 0px;
      padding: 10px 0px 10px 0px;
    }

    .content {
      width: 95%;
      font-size: 1.2rem;
      max-height: 40px;
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 5px;
      background-color: white;
      margin-left: auto;
      margin-right: auto;
      border-radius: 10px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .setup-button {
    width: 100%;
  }
}
</style>
