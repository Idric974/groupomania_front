<template>
  <div class="ReportedComment">
    <div class="repoted-object">
      <h2 class="repoted-title">Liste des postes signalés</h2>
      <div id="info"></div>

      <div class="post" v-for="post in reportedPosts" :key="post.id">
        <div class="alias">
          Publié par : {{ post.user.name }} {{ post.user.firstname }}
        </div>

        <div class="formated-date">{{ post.formatedDate }}</div>

        <div class="title">Titre : {{ post.title }}</div>

        <div class="content">
          {{ post.content }}
        </div>

        <div class="id">Id {{ post.id }}</div>
        <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->

        <!-- ✅ 👉 Afficher div boutons modifier et supprimer post.-->
        <div class="setup-button" v-if="state == '1'">
          <button
            type="submit"
            v-on:click="deletPost(post.id)"
            class="small color"
          >
            Supprimer
          </button>

          <button
            type="submit"
            v-on:click="supReportPost(post.id)"
            class="small color-green"
          >
            Annuler
          </button>
        </div>

        <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Reported",
  data: () => ({
    posts: [],
    state: "1",
  }),

  computed: {
    ...mapState(["reportedPosts"]),
  },

  methods: {
    //* ✅ 👉 Afficher tous les postes.
    readAllReported() {
      this.$store.dispatch("SHOW_ALL_REPORTED_POST");
    },
    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

    //* ✅ 👉 Supprimer le poste sélectionné.
    deletPost(id) {
      const storageToken = localStorage.getItem("groupomania");
      const objJson = JSON.parse(storageToken);
      const token = objJson.token;

      let userId = this.$store.state.id;

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
          this.$store.dispatch("SHOW_ALL_REPORTED_POST");

          return success;
        })
        .catch(function(error) {
          console.log(
            "Il y a eu un problème avec l'opération fetch: " + error.message
          );
        });
    },
    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

    //* ✅ 👉 Signaler un post.
    supReportPost(id) {
      const storageToken = localStorage.getItem("groupomania");
      const objJson = JSON.parse(storageToken);
      const token = objJson.token;

      //* ✅ 👉 Définition du body de la requête.
      const values = {
        signale: "false",
      };
      console.log("✔️✔️✔️ 👉  VALUES =", values);
      const body = JSON.stringify(values);

      //* ✅ 👉 Définition des en-têtes.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json; charset=UTF-8");

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/post/supReportPost/" + id;

      //* ✅ 👉 Définition des paramètres de la requête.
      const parametresDeRequete = {
        method: "POST",
        headers: headers,
        body: body,
      };

      //*✅👉 Exécution de la requête.
      fetch(url, parametresDeRequete)
        .then((success) => {
          this.$store.dispatch("SHOW_ALL_REPORTED_POST");

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
      width: 100%;
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

  #info {
    font-size: 1.5rem;
    color: red;
  }
}
</style>
