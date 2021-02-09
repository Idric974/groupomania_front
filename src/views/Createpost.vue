<template>
  <div class="Createpost">
    <div class="menu_composant">
      <router-link to="/Home"><i class="fas fa-arrow-left"></i></router-link>
      <h1>Créer un poste</h1>
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

      <FormulateInput class="btn" type="submit" label="Poster le texte" />
    </FormulateForm>
    <h3>{{ formValues }}</h3>
  </div>
</template>

<script>
export default {
  name: "Createpost",
  data: () => ({
    formValues: {},
  }),
  methods: {
    handleSubmit() {
      console.log(this.formValues);

      let formValues = this.formValues;

      //⇓⇓ URL de la requête⇓⇓.
      let url = "http://localhost:3000/api/user/post";

      const headers = new Headers();
      headers.append("Content-Type", "application/json; charset=utf-8");

      //⇓⇓ Paramètres de la requête⇓⇓.
      const parametresDeRequete = {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: headers,
      };

      console.log(parametresDeRequete);

      fetch(url, parametresDeRequete)
        .then((success) => {
          console.log(success);
        })
        .catch((error) => {
          console.log(error);
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

.formulate-input-element {
  border: solid red 2px;

  &[data-classification="text"] {
    input {
      color: red;
      font-size: 3rem;
    }
  }
}
</style>
