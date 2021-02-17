<template>
  <div class="Filactualite">
    <div class="post" v-for="post in posts" :key="post.id">
      <div class="nom_utilisateur">{{ post.user.alias }}</div>

      <div class="contenu">
        {{ post.content }}
      </div>

      <div class="comments">
        <Comments :postId="post.id" />
      </div>

      <div class="comment">
        <FormulateForm
          class="formSetUp"
          @submit="commentSubmit(post.id)"
          v-model="formValues"
        >
          <FormulateInput
            type="text"
            name="comment"
            label="Votre commentaire"
            validation="required"
          />

          <FormulateInput class="btn" type="submit" label="Poster le texte" />
        </FormulateForm>
      </div>
    </div>
  </div>
</template>

<script>
import Comments from "./Comments.vue";
export default {
  components: { Comments },
  name: "Filactualite",
  data: () => ({
    formValues: {},
    posts: [],
  }),
  methods: {
    readAllPosts() {
      const userIdStorage = localStorage.getItem("groupomania");
      const objJson = JSON.parse(userIdStorage);
      const token = objJson.token;

      //* ✅ 👉 Définition des en-têtes.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/post/readAllPosts";

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
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
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
  border-radius: 10px;
  box-shadow: black 0px 0px 10px 5px;
  margin-top: 10px;
  margin-bottom: 10px;

  .nom_utilisateur {
    width: 100%;
    font-size: 1.3rem;
    font-weight: bolder;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px 10px 0px 0px;
    background-color: rgb(226, 226, 226);
    padding: 10px 0px 10px 0px;
  }

  .contenu {
    width: 100%;
    height: auto;
    border-radius: 0px 0px 10px 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 1.1rem;
  }

  .comment {
    width: 100%;
    border-radius: 0px 0px 10px 10px;
    background-color: rgb(226, 226, 226);
    padding-top: 10px;
    font-size: 1.1rem;
  }
}
</style>
