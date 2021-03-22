<template>
  <div class="comments-box">
    <br />
    <div class="report-title">
      <h2>Liste des commentaires signalés</h2>
    </div>
    <div id="infoComment"></div>

    <div class="comments" v-for="comment in comments" :key="comment.id">
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
          v-on:click="deletComment(post.id)"
          class="small color"
        >
          Supprimer
        </button>

        <button
          type="submit"
          v-on:click="supReportComment(post.id)"
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
import { FORMAT_DATE } from "../services/utilities";
export default {
  name: "Reported",
  data: () => ({
    comments: [],
    state: "1",
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
      let url = "http://localhost:3000/api/comment/readAllReported/";
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
            console.log(result.comments.length);
            if (result.comments.length == 0) {
              console.log("Pas de commentaire a signaler");

              let infoComment = document.getElementById("infoComment");
              infoComment.innerHTML = `Il n'y a pas de commentaire signalé pour l'instant.`;
            }
            this.comments = result.comments.map((comment) => {
              comment.formatedDate = FORMAT_DATE(comment.createdAt);

              return comment;
            });
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

    //* ✅ 👉 Supprimer le poste sélectionné.
    deletComment(id) {
      const userIdStorage = localStorage.getItem("groupomania");
      const objJson = JSON.parse(userIdStorage);
      const token = objJson.token;
      const userId = objJson.userId;

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
      let url = "http://localhost:3000/api/post/deleteComment/" + id;

      fetch(url, parametresDeRequete)
        .then(function(response) {
          if (response.status !== 200) {
            console.log("Poste supprimé: 👍 👍 👍" + response.status);

            return;
          }

          response.json().then(function(data) {
            console.log(data);

            alert("⚠️ Votre commentaire a été Supprimé ⚠️");
            window.location.reload();
          });
        })
        .catch(function(err) {
          console.log("Catch erreur dans la requête ⚠️ ⚠️ ⚠️", err);
        });
    },
    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

    //* ✅ 👉 Signaler un post.
    supReportComment(id) {
      const userIdStorage = localStorage.getItem("groupomania");
      const objJson = JSON.parse(userIdStorage);

      const token = objJson.token;

      //* ✅ 👉 Définition du body de la requête.
      const values = {
        signale: "false",
      };
      console.log("✔️✔️✔️ 👉  VALUES =", values);
      const body = JSON.stringify(values);
      console.log("✔️✔️✔️ 👉  BODY =", body);

      //* ✅ 👉 Définition des en-têtes.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json; charset=UTF-8");

      console.log("✔️✔️✔️ 👉  HEADERS =", headers);

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/post/supReportComment/" + id;
      console.log("✔️✔️✔️ 👉  URL =", url);

      //* ✅ 👉 Définition des paramètres de la requête.
      const parametresDeRequete = {
        method: "POST",
        headers: headers,
        body: body,
      };
      console.log("✔️✔️✔️ 👉 PARAMÈTRES DE REQUÊTE", parametresDeRequete);

      fetch(url, parametresDeRequete)
        .then(function(response) {
          if (response.status !== 200) {
            console.log(
              "Looks like there was a problem. Status Code: " + response.status
            );

            return;
          }

          response.json().then(function(data) {
            console.log(data);

            alert("⚠️ Signalement annulé ⚠️");
            window.location.reload();
          });
        })
        .catch(function(err) {
          console.log("❌❌❌ CATCH a Fetch Error :-S", err);
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
    font-weight: bolder;
    color: red;
  }
}
</style>
