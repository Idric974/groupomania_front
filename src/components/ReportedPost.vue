<template>
  <div class="ReportedComment">
    <div class="repoted-object">
      <h2 class="repoted-title">Liste des postes signalés</h2>
      <div id="info"></div>

      <div class="post" v-for="post in posts" :key="post.id">
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
import { FORMAT_DATE } from "../services/utilities";
import { userIdTest } from "../services/utilities";
export default {
  name: "Reported",
  data: () => ({
    posts: [],
    state: "1",
  }),

  methods: {
    //* ✅ 👉 Afficher tous les postes.
    readAllReported() {
      console.log("❌❌❌❌❌❌❌❌❌❌ ", userIdTest);
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
            console.log(result.posts.length);
            if (result.posts.length == 0) {
              console.log("Pas de poste à signaler");

              let info = document.getElementById("info");
              info.innerHTML = `Pas poste signalé pour l'instant 😃`;
            }

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

    //* ✅ 👉 Signaler un post.
    supReportPost(id) {
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
      let url = "http://localhost:3000/api/post/supReportPost/" + id;
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

  #info {
    font-size: 1.5rem;
    color: red;
  }
}
</style>
