<template>
  <div class="UpDatePost">
    <div class="menu_composant">
      <router-link to="/Home"><i class="fas fa-arrow-left"></i></router-link>
      <h1>Modifiez votre post</h1>
    </div>
    <FormulateForm
      class="formSetUp"
      @submit="handleSubmit"
      v-model="formValues"
    >
      <FormulateInput
        type="text"
        name="title"
        label="Le titre de votre post"
        validation="required"
      />

      <FormulateInput
        type="text"
        name="content"
        label="Votre Post"
        validation="required"
      />

      <FormulateInput class="btn" type="submit" label="Actualiser le post" />
    </FormulateForm>
  </div>
</template>

<script>
export default {
  name: "UpDatePost",
  data: () => ({
    formValues: {},
  }),
  methods: {
    handleSubmit() {
      const userIdStorage = localStorage.getItem("groupomania");
      const objJson = JSON.parse(userIdStorage);

      const data = this.formValues;

      const token = objJson.token;
      console.log(objJson.token);

      const values = {
        title: data.title,
        content: data.content,
        userId: objJson.userId,
      };

      //* ✅ 👉 Définition du body.
      const body = JSON.stringify(values);
      console.log(body);

      //* ✅ 👉 Définition des en-têtes.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json");

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/post/createPost";

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
label {
  font-size: 1.2rem;
  padding-bottom: 20px;
}

input {
  padding: 100px 10px 10px 10px;
}

.Createpost {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: black 0px 0px 5px 0px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a:link {
    text-decoration: none;
  }
}
</style>
