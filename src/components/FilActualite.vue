<template>
  <div class="Filactualite">
    <div class="post" v-for="post in posts" :key="post.id">
      <div class="nom_utilisateur">Post de : {{ post.user.alias }}</div>

      <div class="contenu">
        {{ post.content }}
      </div>

      <!-- <div class="comments">
        <h3>Commentaires des lecteurs</h3>
        <Comments :postId="post.id" />
      </div> -->

      <div class="form_comments">
        <FormulateForm
          class="formSetUp"
          @submit="commentSubmit(post.id)"
          v-model="formValues"
        >
          <FormulateInput
            type="text"
            name="comment"
            label="↙️  Commentez ce post ↘️"
            validation="required"
          />

          <FormulateInput class="btn" type="submit" label="Poster le texte" />
        </FormulateForm>

        <div class="voircommentaire">
          <router-link to="/ListComments"
            ><button class=" btn_L " type="submit">
              Lire les commentaires
            </button></router-link
          >
        </div>
      </div>

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
    box-shadow: green 0px 0px 5px 1px;
    border-radius: 10px;
  }

  .nom_utilisateur {
    width: 100%;
    font-size: 1.5rem;
    font-weight: bolder;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px 10px 0px 0px;
    background-color: rgb(226, 226, 226);
    padding: 10px 0px 10px 0px;
  }

  .contenu {
    width: 100%;
    min-height: 100px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 1.1rem;
  }

  .comments {
    width: 100%;
    border: solid red 1px;
    font-size: 1.1rem;
  }

  .form_comments {
    width: 100%;
    height: auto;
    background-color: rgb(226, 226, 226);
    //border-radius: 0px 0px 10px 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: bolder;
  }

  .post_btn {
    width: 100px;
    margin: 10px 15px 10px 15px;
    font-weight: bolder;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 10px;
  }
}

.btn_M {
  background-color: rgb(0, 137, 216);
}

.btn_S {
  background-color: rgb(216, 50, 0);
}

.btn_L {
  width: 240px;
  margin: 10px 15px 10px 15px;
  font-weight: bolder;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 10px;
}
</style>
