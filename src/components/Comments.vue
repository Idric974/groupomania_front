<template>
  <!-- 👉 Component Comments 👈-->

  <div class="Comments">
    <h1>Composant commentaire</h1>
    <div class="post" v-for="post in posts" :key="post.id">
      <div class="nom_utilisateur">{{ post.user.alias }}</div>

      <div class="contenu">
        {{ post.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comments",
  data: () => ({
    posts: [],
  }),
  props: ["postId"],

  methods: {
    readAll() {
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
    this.readAll();
  },
};
</script>

<style lang="scss" scoped>
.Comments {
  width: 100%;
  height: 400px;
  border: solid green 1px;
}

.post {
  width: 100%;
  height: 300px;
  border: solid blue 3px;
}
</style>
