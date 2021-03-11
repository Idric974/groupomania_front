<template>
  <!-- 👉 Le poste séléctioné-->
  <div class="selected-post">
    <div class="post">
      <div class="user-name">
        Publié par : {{ posts.user.name }} {{ posts.user.firstname }}
      </div>

      <div class="date">Date création : {{ date }}</div>

      <div class="title">Titre : {{ posts.title }}</div>

      <div class="content">{{ posts.content }}</div>

      <div class="postId">
        DEV INFO: post number = {{ posts.id }} || UserId = {{ posts.userId }}
      </div>
    </div>
    <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->

    <!-- ✅ 👉 Formulaire pour la saisie des commentaire.-->
    <div class="comments-form">
      <form class="setUp-form">
        <input
          type="text"
          name="comment"
          validation="required"
          placeholder="Commentez ce post ici"
          v-model="input.comment"
        />

        <button v-on:click.prevent="submitComment(posts.id)" class="large">
          Poster votre commentaire
        </button>
      </form>
    </div>
    <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->

    <!-- ✅ 👉 Afficher div boutons modifier et supprimer post.-->
    <div class="setup-button" v-if="state == 1">
      <router-link to="/UpDatePost"
        ><button type="submit" class="small">
          Modifier
        </button></router-link
      >
      <button type="submit" v-on:click="deletPost(post.id)" class="small">
        Supprimer
      </button>
    </div>
    <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->
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
      input: { comment: "" },
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
            console.log(userIdPost);
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

      const comment = this.input.comment;
      const postId = this.posts.id;

      const values = {
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
          console.log(success);
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
        method: "DELETE",
        headers: headers,
        body: body,
      };

      //* ✅ 👉 Définition de la params.
      const params = this.$route.params.id;

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/post/delete/" + params;

      fetch(url, parametresDeRequete)
        .then(function(response) {
          if (response.status !== 200) {
            console.log("Poste supprimé: 👍 👍 👍" + response.status);
            return;
          }

          response.json().then(function(data) {
            console.log(data);
          });
        })
        .catch(function(err) {
          console.log("Catch erreur dans la requête ⚠️ ⚠️ ⚠️", err);
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
  background-color: rgba(180, 207, 243, 0.8);
  box-shadow: #1e3d59 0px 0px 10px 5px;
  border-radius: 10px;

  .post {
    margin-top: 10px;
    margin-bottom: 10px;

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
    color: red;
  }

  .comments {
    width: 100%;
    border: solid red 1px;
    font-size: 1.1rem;
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
  }
}
.setup-button {
  border-radius: 10px 10px 10px 10px;
  background-color: rgba(102, 103, 105, 0.8);
}

.setUp-form {
  width: 93%;
  margin-left: auto;
  margin-right: auto;
}
</style>
