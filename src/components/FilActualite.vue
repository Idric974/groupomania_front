<template>
  <div class="Filactualite">
    <div class="nom_utilisateur">Allie Patou</div>

    <div class="contenu">
      Intrinsicly visualize go forward systems rather than turnkey content.
      Enthusiastically reintermediate mission-critical experiences before fully
      tested users. Credibly procrastinate front-end value without effective
      data. Quickly utilize go forward benefits after client-centric leadership.
      Interactively.
    </div>

    <div class="comment">
      <FormulateForm
        class="formSetUp"
        @submit="handleSubmit"
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
</template>

<script>
export default {
  name: "Filactualite",
  data: () => ({
    formValues: {},
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
          console.log(success);
        })
        .catch(function(error) {
          console.log(
            "Il y a eu un problème avec l'opération fetch: " + error.message
          );
        });
    },
    handleSubmit() {
      const userIdStorage = localStorage.getItem("groupomania");
      const objJson = JSON.parse(userIdStorage);

      const data = this.formValues;

      const values = {
        comment: data.comment,
        userId: objJson.userId,
      };

      //* ✅ 👉 Définition du body.
      const body = JSON.stringify(values);
      console.log(body);

      //* ✅ 👉 Définition des en-têtes.
      const headers = new Headers();
      headers.append("Content-Type", "application/json; charset=utf-8");

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/user/comment";

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
