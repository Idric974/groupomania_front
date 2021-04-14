<template>
  <!-- 👉 Le poste séléctioné-->
  <div class="selected-post" v-if="this.posts != null">
    <div class="post">
      <div class="user-name">
        <br />
        <i class="fas fa-user"></i>
        {{ name }} {{ firstname }}
      </div>

      <div class="date">{{ date }}</div>

      <div class="title">Titre : {{ title }}</div>

      <div class="content">{{ content }}</div>

      <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->

      <!-- ✅ 👉 Afficher div boutons modifier et supprimer post.-->
      <div class="setup-button">
        <div class="eddit-supp">
          <div class="Modifier" v-if="edit == 1">
            <router-link :to="{ name: 'UpDatePost', params: { id: posts.id } }"
              ><button type="submit" class="small">
                Modifier
              </button></router-link
            >
            <button type="submit" v-on:click="deletPost(post.id)" class="small">
              Supprimer
            </button>
          </div>
        </div>

        <div class="signale" v-if="report == 1">
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

export default {
  components: {},
  data() {
    return {
      input: { title: "", comment: "" },
      posts: [],
      post: [],
      date: [],
      formValues: {},
      edit: "",
      report: "",
      name: "",
      firstname: "",
      title: "",
      content: "",
    };
  },

  methods: {
    //* ✅ 👉 Afficher le poste sélectionné.
    findOne() {
      const params = this.$route.params.id;

      const storageToken = localStorage.getItem("groupomania");
      const objJson = JSON.parse(storageToken);
      const token = objJson.token;

      let userId = this.$store.state.id;

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

            this.firstname = this.posts.user.firstname;
            this.name = this.posts.user.name;
            this.date = FORMAT_DATE(result.posts.createdAt);
            this.title = this.posts.title;
            this.content = this.posts.content;

            console.log(
              "%cPoste sélectionné",
              "color:green ;  font-size: 15px"
            );

            if (this.posts.userId == userId) {
              console.log(
                "Pour ce post, signalement impossible || Modifications du post possible"
              );

              this.edit = 1;
            } else {
              this.edit = 0;
            }

            if (this.posts.userId != userId) {
              console.log(
                "Pour ce post, signalement possible || Modifications du post impossible"
              );

              this.report = 1;
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
      const storageToken = localStorage.getItem("groupomania");

      const objJson = JSON.parse(storageToken);
      const token = objJson.token;

      const title = this.input.title;
      const comment = this.input.comment;
      const postId = this.posts.id;

      let userId = this.$store.state.id;

      const values = {
        title: title,
        comment: comment,
        postId: postId,
        userId: userId,
      };

      //* ✅ 👉 Définition du body de la requête.
      const body = JSON.stringify(values);

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

      //*✅👉 Exécution de la requête.
      fetch(url, parametresDeRequete)
        .then((success) => {
          console.log("Commentaire crée" + success);
          this.input.title = "";
          this.input.comment = "";

          alert("Commentaire ajouté");
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
      const storageToken = localStorage.getItem("groupomania");
      const objJson = JSON.parse(storageToken);
      const token = objJson.token;

      let userId = this.$store.state.userId;

      //* ✅ 👉 Définition du headers.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json");

      // //* ✅ 👉 Définition du body de la requête.

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
      const storageToken = localStorage.getItem("groupomania");
      const objJson = JSON.parse(storageToken);
      const token = objJson.token;

      //* ✅ 👉 Définition du body de la requête.
      const values = {
        signale: "true",
      };
      console.log("✔️✔️✔️ 👉  VALUES =", values);
      const body = JSON.stringify(values);

      //* ✅ 👉 Définition des en-têtes.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json; charset=UTF-8");

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/post/reportPost/" + this.posts.id;

      //* ✅ 👉 Définition des paramètres de la requête.
      const parametresDeRequete = {
        method: "POST",
        headers: headers,
        body: body,
      };

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
            alert("⚠️ Ce poste a été signalé à l’administrateur ⚠️ ");
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
    .title {
      padding-top: 10px;
      padding-bottom: 10px;
      font-size: 1.3rem;
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
    font-size: 1.3rem;
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

  @media screen and (min-width: 742px) and (max-width: 991px) {
  }

  @media screen and (min-width: 992px) {
    margin: auto;
    width: 80%;
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

  .eddit-supp,
  .Modifier {
    display: flex;
  }
}

.setUp-form {
  width: 93%;
  margin-left: auto;
  margin-right: auto;
}
</style>
