<template>
  <!-- 👉 Le poste séléctioné-->
  <div class="selected-post">
    <div class="post">
      <div class="user-name">
        <h1>Poste séléctionné</h1>
        <br />
        Publié par : {{ posts.user.name }} {{ posts.user.firstname }}
      </div>

      <div class="date">Création : {{ date }}</div>

      <div class="title">Titre : {{ posts.title }}</div>

      <div class="content">{{ posts.content }}</div>

      <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->

      <!-- ✅ 👉 Afficher div boutons modifier et supprimer post.-->
      <div class="setup-button">
        <div class="eddit-supp" v-if="state == 1">
          <router-link to="/UpDatePost"
            ><button type="submit" class="small">
              Modifier
            </button></router-link
          >
          <button type="submit" v-on:click="deletPost(post.id)" class="small">
            Supprimer
          </button>
        </div>

        <div class="signale" v-if="state == 0">
          <button
            type="submit"
            v-on:click="reportPost(post.id)"
            class="small color"
          >
            Signaler
          </button>
        </div>
      </div>
    </div>
    <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->

    <!-- ✅ 👉 Formulaire pour la saisie des commentaire.-->
    <div class="comments-form">
      <h1>Nouveau commentaire</h1>
      <form class="setUp-form">
        <input
          type="text"
          name="title"
          validation="required"
          placeholder="Titre de votre commentaire"
          v-model="input.title"
        />
        <input
          type="text"
          name="comment"
          validation="required"
          placeholder="Commentez ce post ici"
          v-model="input.comment"
        />

        <button v-on:click.prevent="submitComment()" class="large">
          Poster votre commentaire
        </button>
      </form>
    </div>
    <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->
  </div>
</template>

<script>
import { FORMAT_DATE } from "../services/utilities";

import { userId } from "../services/utilities";
console.log("✔️✔️✔️ 😃➖➖➖➖➖➖► SelectedPost UserId =", userId);

import { token } from "../services/utilities";
console.log("✔️✔️✔️ 😃➖➖➖➖➖➖► SelectedPost UserToken =", token);

export default {
  components: {},
  data() {
    return {
      input: { title: "", comment: "" },
      posts: [],
      post: [],
      date: [],
      formValues: {},
      state: "",
    };
  },

  methods: {
    //* ✅ 👉 Afficher le poste sélectionné.
    findOne() {
      const params = this.$route.params.id;
      const userIdStorage = localStorage.getItem("groupomania");

      const objJson = JSON.parse(userIdStorage);
      const token = objJson.token;

      const UserIdJson = JSON.parse(userIdStorage);
      const userId = UserIdJson.userId;

      //* ✅ 👉 Définition des en-têtes.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/post/findOne/" + params;

      //* ✅ 👉 Définition des paramètres de la requête.
      const parametresDeRequete = {
        method: "GET",
        headers: headers,
      };

      fetch(url, parametresDeRequete)
        .then((success) => {
          success.json().then((result) => {
            this.posts = result.posts;
            console.log(this.posts);

            this.date = FORMAT_DATE(result.posts.createdAt);
            console.log(this.date);

            const userIdPost = result.posts.userId;
            console.log("✔️✔️✔️ 😃➖➖➖➖➖➖► User Id Post=", userIdPost);
            console.log("✔️✔️✔️ 😃➖➖➖➖➖➖► User Id =", userId);

            if (userIdPost !== userId) {
              console.log("userId connecté est différent de postUserId ❌❌❌");
              this.state = 0;
            } else {
              console.log(
                "userId connecté est le même que postUserId 👍 👍 👍"
              );
              this.state = 1;
            }
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

    //* ✅ 👉 Poster un commentaire.
    submitComment() {
      const userIdStorage = localStorage.getItem("groupomania");
      const objJson = JSON.parse(userIdStorage);

      const token = objJson.token;
      console.log(objJson.token);

      const title = this.input.title;
      const comment = this.input.comment;
      const postId = this.posts.id;

      const values = {
        title: title,
        comment: comment,
        postId: postId,
        userId: objJson.userId,
      };
      console.log(values);

      //* ✅ 👉 Définition du body de la requête.
      const body = JSON.stringify(values);
      console.log(body);

      //* ✅ 👉 Définition des en-têtes de la requête.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json");

      //* ✅ 👉 Définition des paramètres de la requête.
      const parametresDeRequete = {
        method: "POST",
        body: body,
        headers: headers,
      };

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/comment/createComment";

      console.log(parametresDeRequete);

      //*✅👉 Exécution de la requête.
      fetch(url, parametresDeRequete)
        .then((success) => {
          console.log("Commentaire crée" + success);
          window.location.reload();
        })
        .catch(function(error) {
          console.log(
            "Il y a eu un problème avec l'opération fetch: " + error.message
          );
        });
    },

    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

    //* ✅ 👉 Supprimer le poste sélectionné.
    deletPost() {
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
      const params = this.$route.params.id;

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/post/deletePost/" + params;

      fetch(url, parametresDeRequete)
        .then(function(response) {
          if (response.status !== 200) {
            console.log("Poste supprimé: 👍 👍 👍" + response.status);

            return;
          }

          response.json().then(function(data) {
            console.log(data);

            alert("⚠️ Votre poste a été Supprimé ⚠️");

            window.location.href = "/home#/home";
          });
        })
        .catch(function(err) {
          console.log("Catch erreur dans la requête ⚠️ ⚠️ ⚠️", err);
        });
    },
    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

    //* ✅ 👉 Signaler un post.
    reportPost() {
      console.log("✔️✔️✔️ 👉  USER ID =", userId);
      console.log("✔️✔️✔️ 👉  TOKEN =", token);
      console.log("✔️✔️✔️ 👉  POST ID =", this.posts.id);

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
      let url = "http://localhost:3000/api/post/reportPost/" + this.posts.id;
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
          });
        })
        .catch(function(err) {
          console.log("❌❌❌ CATCH a Fetch Error :-S", err);
        });
    },
    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
  },

  mounted() {
    this.findOne();
  },
};
</script>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

<style lang="scss" scoped>
.selected-post {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;

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
    .user-name,
    .date,
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

  .postId {
    padding-top: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .comments {
    width: 100%;
    border: solid red 1px;
    font-size: 1.1rem;
  }
}

.comments-form {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: bolder;
  box-shadow: #1e3d59 0px 0px 10px 5px;
  border-radius: 10px;
  margin-top: 20px;

  input {
    border: solid black 1px;
  }
}

.setup-button {
  width: 95%;
  border-radius: 10px 10px 10px 10px;
  background-color: rgba(102, 103, 105, 0.8);
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;

  .eddit-supp {
    display: flex;
  }
}

.setUp-form {
  width: 93%;
  margin-left: auto;
  margin-right: auto;
}
</style>
