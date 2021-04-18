<template>
  <div class="comments-box">
    <br />
    <div class="report-title">
      <h2>Liste des commentaires signalés</h2>
    </div>
    <div id="infoComment"></div>

    <div class="comments" v-for="comment in reportedComments" :key="comment.id">
      <div class="user-name">
        De : {{ comment.user.name }} {{ comment.user.firstname }}
      </div>

      <div class="formated-date">{{ comment.formatedDate }}</div>

      <div class="title">Titre : {{ comment.title }}</div>

      <div class="comment">
        {{ comment.comment }}
      </div>

      <div class="id">id {{ comment.id }}</div>
      <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->

      <!-- ✅ 👉 Afficher div boutons modifier et supprimer post.-->
      <div class="setup-button" v-if="state == '1'">
        <button
          type="submit"
          v-on:click="deletComment(comment.id)"
          class="small color"
        >
          Supprimer
        </button>

        <button
          type="submit"
          v-on:click="supReportComment(comment.id)"
          class="small color-green"
        >
          Annuler
        </button>
      </div>

      <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Reported",
  data: () => ({
    comments: [],
    state: "1",
  }),

  computed: {
    ...mapState(["reportedComments"]),
  },

  methods: {
    //* ✅ 👉 Afficher tous les postes.
    readAllReported() {
      this.$store.dispatch("SHOW_ALL_REPORTED_COMMENTS");
    },

    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

    //* ✅ 👉 Supprimer le commentaire sélectionné.
    deletComment(id) {
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
      let url = "http://localhost:3000/api/comment/deleteComment/" + id;

      //*✅👉 Exécution de la requête.
      fetch(url, parametresDeRequete)
        .then((success) => {
          this.$store.dispatch("SHOW_ALL_REPORTED_COMMENTS");

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
    supReportComment(id) {
      const storage = localStorage.getItem("groupomania");
      const objJson = JSON.parse(storage);
      const token = objJson.token;

      //* ✅ 👉 Définition du body de la requête.
      const values = {
        signale: "false",
      };

      const body = JSON.stringify(values);

      //* ✅ 👉 Définition des en-têtes.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json; charset=UTF-8");

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/comment/supReportComment/" + id;

      //* ✅ 👉 Définition des paramètres de la requête.
      const parametresDeRequete = {
        method: "POST",
        headers: headers,
        body: body,
      };

      //*✅👉 Exécution de la requête.
      fetch(url, parametresDeRequete)
        .then((success) => {
          this.$store.dispatch("SHOW_ALL_REPORTED_COMMENTS");

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
.comments-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  .report-title {
    width: 100%;
  }

  .comments {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 5px;
    border-radius: 10px;
    box-shadow: black 0px 0px 10px 5px;

    .user-name {
      width: 100%;
      height: auto;
      border-radius: 10px 10px 0px 0px;

      font-size: 1.2rem;
      font-weight: bolder;
      padding-bottom: 10px;
    }

    .title {
      width: 100%;
      height: auto;
      height: auto;
      border-radius: 10px 10px 0px 0px;
      font-size: 1.2rem;
      background-color: rgb(236, 236, 236);
      padding-top: 10px;
      padding-bottom: 10px;
      color: black;
      font-weight: bolder;
      border-bottom: solid white 2px;
    }

    .comment {
      width: 100%;
      height: auto;
      border-radius: 0px 0px 10px 10px;
      font-size: 1.1rem;
      background-color: rgb(236, 236, 236);
      padding-top: 10px;
      padding-bottom: 10px;
    }

    .setup-button {
      display: flex;
      justify-content: center;
    }
  }

  #infoComment {
    font-size: 1.5rem;
    color: red;
  }
}
</style>
