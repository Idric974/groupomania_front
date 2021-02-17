<template>
  <div class="Filactualite">
    <div class="post" v-for="post in posts" :key="post.id">
      <div class="nom_utilisateur">{{ post.user.alias }}</div>

      <div class="contenu">
        {{ post.content }}
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
export default {
  name: "Filactualite",
  data: () => ({}),
  props: ["postId"],

  methods: {
    readAllComments() {
      const userIdStorage = localStorage.getItem("groupomania");
      const objJson = JSON.parse(userIdStorage);

      const token = objJson.token;

      //* ✅ 👉 Définition des en-têtes.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/comment/readAll/" + this.postId;

      //* ✅ 👉 Définition des paramètres de la requête.
      const parametresDeRequete = {
        method: "GET",

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
    this.readAllComments();
  },
};
</script>

<style lang="scss" scoped></style>
