<template>
  <!-- 👉 Components FilActualite 👈-->

  <div class="news-feed">
    <!-- ✅ 👉 Affichage du pseudo et du post-->
    <div class="post" v-for="post in posts" :key="post.id">
      <div class="alias">Publié par : {{ post.user.alias }}</div>

      <div class="formated-date">{{ post.formatedDate }}</div>

      <div class="content">
        {{ post.content }}
      </div>

      <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->

      <!-- ✅ 👉 Formulaire pour la saisie des commentaire.-->
      <div class="comments-form">
        <FormulateForm
          class="setUp-form"
          @submit="commentSubmit(post.id)"
          v-model="formValues"
        >
          <FormulateInput
            type="text"
            name="comment"
            validation="required"
            placeholder="Commentez ce post ici"
          />

          <button type="submit" class="large">
            Poster votre commentaire
          </button>
        </FormulateForm>
        <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->

        <!-- ✅ 👉 Bouton pour lire les commentaires. -->
        <div class="btnReadComment">
          <router-link :to="{ name: 'ListComments', params: { id: post.id } }"
            ><button v-on:click="sendId(post.id)" class="large">
              Lire les commentaires
            </button></router-link
          >
        </div>
        <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->
      </div>

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
  </div>
</template>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

<script>
import { FORMAT_DATE } from "../services/utilities";
export default {
  name: "NewsFeed",
  data: () => ({
    state: "1",
    formValues: {},
    posts: [],
  }),
  methods: {
    //*✅👉 Gérer la modification et la suppression des postes.
    stateManageur() {
      const localStorageData = localStorage.getItem("groupomania");
      const objJson = JSON.parse(localStorageData);
      const userId = objJson.userId;
      console.log("✔️✔️✔️ 😃➖➖➖➖➖➖► Connected userId's ", userId);
    },
    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

    //* ✅ 👉 Afficher tous les postes.
    readAllPosts() {
      const userIdStorage = localStorage.getItem("groupomania");
      const objJson = JSON.parse(userIdStorage);
      const token = objJson.token;

      // //* ✅ 👉 Définition des en-têtes.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);

      // //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/post/readAllPosts";

      // //* ✅ 👉 Définition des paramètres de la requête.
      const parametresDeRequete = {
        method: "GET",
        headers: headers,
      };

      fetch(url, parametresDeRequete)
        .then((success) => {
          success.json().then((result) => {
            this.posts = result.posts.map((post) => {
              post.formatedDate = FORMAT_DATE(post.createdAt);
              return post;
            });
            console.log(this.posts);
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

    //* ✅ 👉 Poster un commentaire.
    commentSubmit(postId) {
      const userIdStorage = localStorage.getItem("groupomania");
      const objJson = JSON.parse(userIdStorage);

      const data = this.formValues;

      const token = objJson.token;
      console.log(objJson.token);

      const values = {
        comment: data.comment,
        userId: objJson.userId,
        postId: postId,
      };

      //* ✅ 👉 Définition du body.
      const body = JSON.stringify(values);

      //* ✅ 👉 Définition des en-têtes.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json");

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/comment/createComment";

      //* ✅ 👉 Définition des paramètres de la requête.
      const parametresDeRequete = {
        method: "POST",
        body: body,
        headers: headers,
      };

      console.log(parametresDeRequete);

      fetch(url, parametresDeRequete)
        .then((success) => {
          console.log(success);
          alert("Votre commentaire a été enregistré");
        })
        .catch(function(error) {
          console.log(
            "Il y a eu un problème avec l'opération fetch: " + error.message
          );
        });
    },

    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
    //* ✅ 👉 Supprimer un post.
    deletPost(postId) {
      const userIdStorage = localStorage.getItem("groupomania");
      const objJson = JSON.parse(userIdStorage);

      const userId = objJson.userId;
      console.log("✔️✔️✔️ 😃➖➖➖➖➖➖►userId", userId);

      const token = objJson.token;
      console.log("✔️✔️✔️ 😃➖➖➖➖➖➖►Token", objJson.token);

      const values = {
        postId: postId,
      };

      console.log("✔️✔️✔️ 😃➖➖➖➖➖➖►postId", postId);

      //* ✅ 👉 Définition du body.
      const body = JSON.stringify(values);

      //* ✅ 👉 Définition des en-têtes.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json");

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/delete/delete/" + postId;

      //* ✅ 👉 Définition des paramètres de la requête.
      const parametresDeRequete = {
        method: "DELETE",
        body: body,
        headers: headers,
      };

      console.log(parametresDeRequete);

      fetch(url, parametresDeRequete)
        .then((success) => {
          console.log(success);
          //alert("Votre post a été supprimé");
        })
        .catch(function(error) {
          console.log(
            "Il y a eu un problème avec l'opération fetch: " + error.message
          );
        });
    },
  },

  mounted() {
    this.readAllPosts();
    this.stateManageur();
  },
};
</script>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

<style lang="scss" scoped>
.news-feed {
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
  }

  .alias {
    width: 100%;
    font-size: 1.5rem;
    font-weight: bolder;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px 10px 0px 0px;
    padding: 10px 0px 10px 0px;
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
