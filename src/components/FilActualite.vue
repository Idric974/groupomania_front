<template>
  <!-- 👉 Components FilActualite👈-->

  <div class="Filactualite">
    <!-- ✅ 👉 Affichage du pseudo et du post-->
    <div class="post" v-for="post in posts" :key="post.id">
      <div class="nom_utilisateur">Publié par : {{ post.user.alias }}</div>

      <div class="contenu">
        {{ post.content }}
      </div>
      <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->

      <!-- ✅ 👉 Formulaire pour la saisie des commentaire.-->
      <div class="form_comments">
        <FormulateForm
          class="formSetUp"
          @submit="commentSubmit(post.id)"
          v-model="formValues"
        >
          <FormulateInput
            type="text"
            name="comment"
            validation="required"
            placeholder="Commentez ce post ici"
          />

          <FormulateInput
            class="btn_L com"
            type="submit"
            label="Poster votre commentaire"
          />
        </FormulateForm>
        <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->

        <!-- ✅ 👉 Bouton pour lire les commentaires. -->
        <div class="lirecommentaire">
          <router-link to="/ListComments"
            ><button
              class=" btn_L com "
              type="submit"
              @submit="sendPostId(post.id)"
            >
              Lire les commentaires
            </button></router-link
          >
        </div>
        <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->
      </div>

      <!-- ✅ 👉 Afficher div boutons modifier et supprimer post.-->
      <div class="setupbutton" v-if="state == 1">
        <router-link to="/UpDatePost"
          ><button class="post_btn btn_M " type="submit">
            Modifier
          </button></router-link
        >
        <button
          class="post_btn btn_S"
          type="submit"
          v-on:click="deletPost(post.id)"
        >
          Supprimer
        </button>
      </div>
      <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->
    </div>
  </div>
</template>

<script>
//import Comments from "./Comments.vue";

//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

export default {
  //components: { Comments },

  name: "Filactualite",
  data: () => ({
    state: "1",
    formValues: {},
    posts: [],
  }),
  methods: {
    //* ✅ 👉 Afficher tous les commentaire.
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
            this.posts = result.posts;
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
      console.log(userId);

      const token = objJson.token;
      console.log(objJson.token);

      const values = {
        postId: postId,
      };

      console.log(postId);

      //* ✅ 👉 Définition du body.
      const body = JSON.stringify(values);

      //* ✅ 👉 Définition des en-têtes.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json");

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/post/delete/" + postId;

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

    //sendPostId(postId) {},
  },

  mounted() {
    this.readAllPosts();
  },
};
</script>

<style lang="scss" scoped>
.Filactualite {
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
    background-color: #f5f0e1;

    @media screen and (min-width: 742px) and (max-width: 991px) {
    }

    @media screen and (min-width: 992px) {
      margin-left: auto;
      margin-right: auto;
      width: 80%;
    }
  }

  .nom_utilisateur {
    width: 100%;
    font-size: 1.5rem;
    font-weight: bolder;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px 10px 0px 0px;
    padding: 10px 0px 10px 0px;
  }

  .contenu {
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

  .form_comments {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: bolder;
  }

  .post_btn {
    width: 106px;
    margin: 10px 15px 10px 15px;
    font-weight: bolder;
    padding: 10px 10px 10px 10px;
    border-radius: 10px;
    text-align: center;
    box-shadow: #1e3d59 0px 0px 5px 1px;
  }
}

.btn_M,
.btn_S {
  background-color: #1e3d59;
  color: white;
  letter-spacing: 2px;
}

.btn_L {
  width: 240px;
  margin: 10px 15px 10px 15px;
  font-weight: bolder;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 10px;
  border: solid #ff6e40 1px;
  background-color: white;
}

.com {
  box-shadow: #1e3d59 0px 0px 5px 5px;
}
</style>
