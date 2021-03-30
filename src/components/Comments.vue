<template>
  <div class="comments-box">
    <!--✅ 👉 Affiche les commentaires du post sélectionné-->
    <div class="comments" v-for="comment in comments" :key="comment.id">
      <div class="user-name">
        De:
        {{ comment.user.alias }}
      </div>

      <div class="formated-date">{{ comment.formatedDate }}</div>

      <div class="title">
        {{ comment.title }}
      </div>

      <div class="comment">
        {{ comment.comment }}
      </div>

      <div class="setup-button">
        <div class="eddit-supp" v-if="state == 1">
          <router-link
            :to="{ name: 'UpdateComment', params: { id: comment.id } }"
            ><button type="submit" class="small">
              Modifier
            </button></router-link
          >
          <button
            type="submit"
            v-on:click="deletComment(comment.id)"
            class="small"
          >
            Supprimer
          </button>
        </div>

        <div class="signale" v-if="state == 0">
          <button
            type="submit"
            v-on:click="reportComment(comment.id)"
            class="small color"
          >
            Signaler
          </button>
        </div>
      </div>
    </div>
    <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->
  </div>
</template>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

<script>
import { FORMAT_DATE } from "../services/utilities";

export default {
  name: "Comments",
  data: () => ({
    comments: [],
    comment: [],
    state: "",
  }),

  methods: {
    //* ✅ 👉 Afficher le poste.
    findAll() {
      const params = this.$route.params.id;
      console.log("✔️✔️✔️ 😃➖➖➖➖➖➖► Comments Post Id", params);

      const storageToken = localStorage.getItem("groupomania");
      const objJson = JSON.parse(storageToken);
      const token = objJson.token;

      let userInfo = this.$store.state;
      let userId = userInfo.loggedUser;

      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);

      // //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/comment/readAllcomments/" + params;

      // //* ✅ 👉 Définition des paramètres de la requête.
      const parametresDeRequete = {
        method: "GET",
        headers: headers,
      };

      fetch(url, parametresDeRequete)
        .then((success) => {
          success.json().then((result) => {
            this.comments = result.comments.map((comment) => {
              comment.formatedDate = FORMAT_DATE(comment.createdAt);

              const userIdPost = comment.userId;
              console.log("✔️✔️✔️ 😃➖➖➖➖➖➖► User Id Post=", userIdPost);
              console.log("✔️✔️✔️ 😃➖➖➖➖➖➖► User Id =", userId);

              if (userIdPost !== userId) {
                console.log(
                  "userId connecté est différent de postUserId ❌❌❌"
                );
                this.state = 0;
              } else {
                console.log(
                  "userId connecté est le même que postUserId 👍 👍 👍"
                );
                this.state = 1;
              }

              return comment;
            });
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

    //* ✅ 👉 Supprimer le poste sélectionné.
    deletComment(comment) {
      const storageToken = localStorage.getItem("groupomania");
      const objJson = JSON.parse(storageToken);
      const token = objJson.token;

      let userInfo = this.$store.state;
      let userId = userInfo.loggedUser;

      //* ✅ 👉 Définition du headers.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json");

      // //* ✅ 👉 Définition du body de la requête.

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

      //* ✅ 👉 Définition de la params.

      const params = comment;
      console.log(params);

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/comment/deleteComment/" + params;
      console.log(url);

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

    //* ✅ 👉 Signaler un commentaire.
    reportComment(id) {
      const storageToken = localStorage.getItem("groupomania");
      const objJson = JSON.parse(storageToken);
      const token = objJson.token;

      let userInfo = this.$store.state;
      let userId = userInfo.loggedUser;

      console.log("✔️✔️✔️ 👉  USER ID =", userId);
      console.log("✔️✔️✔️ 👉  TOKEN =", token);
      console.log("✔️✔️✔️ 👉  COMMENT ID =", id);

      //* ✅ 👉 Définition du body de la requête.
      const values = {
        signale: "true",
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
      let url = "http://localhost:3000/api/comment/reportComment/" + id;
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
            alert("⚠️ Ce commentaire a été signalé à l’administrateur ⚠️ ");
          });
        })
        .catch(function(err) {
          console.log("❌❌❌ CATCH a Fetch Error :-S", err);
        });
    },

    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
  },

  mounted() {
    this.findAll();
  },
};
</script>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

<style lang="scss" scoped>
.comments-box {
  width: 100%;

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

      font-size: 1.5rem;
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

      .eddit-supp {
        display: flex;
      }
    }
  }
}
</style>
