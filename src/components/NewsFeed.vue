<template>
  <!-- 👉 Components FilActualite 👈-->

  <div class="news-feed" v-if="name != null">
    <!-- ✅ 👉 Affichage du pseudo et du post-->

    <div class="feed" v-for="post in readAllPost" :key="post.id">
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
          <router-link
            :to="{ name: 'ListComments', params: { id: post.id } }"
            aria-label="home"
            a
            href="#"
            ><button class="large" @click="selectedPostId(post.id)">
              Lire la suite du poste
            </button></router-link
          >
        </div>

        <!-- ✅ 👉 Afficher div boutons modifier et supprimer post.-->

        <div class="setup-button" v-if="admin === true">
          <button
            type="submit"
            v-on:click="admindeletPost(post.id)"
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
      "readAllPost",
    ]),
  },

  methods: {
    //* ✅ 👉 Rester coonecté.
    stayLoggedIn() {
      this.$store.dispatch("LOGGED_USER");
    },
    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

    //* ✅ 👉 Afficher tous les postes.
    readAllPosts() {
      this.$store.dispatch("SHOW_ALL_POSTS");
    },
    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

    //* ✅ 👉 Afficher tous les commentaires.
    selectedPostId(id) {
      window.localStorage.setItem("postId", id);
    },
    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

    //* ✅ 👉 Supprimer le poste sélectionné.
    admindeletPost(id) {
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

      //*✅👉 Exécution de la requête.
      fetch(url, parametresDeRequete)
        .then((success) => {
          alert("Ce poste va être supprimé");
          this.$store.dispatch("SHOW_ALL_POSTS");

          return success;
        })
        .catch(function(error) {
          console.log(
            "Il y a eu un problème avec l'opération fetch: " + error.message
          );
        });
    },
    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
  },

  mounted() {
    this.readAllPosts();
    this.stayLoggedIn();
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
