<template>
  <div class="Signup">
    <h2>
      <router-link to="/"><i class="fas fa-arrow-left"></i></router-link>Page
      inscription
    </h2>
    <p>
      Pour vous connecter à votre réseau social, veuillez compléter le
      formulaire ci-dessous.
    </p>

    <!---------------------------------------------------------------------->

    <FormulateForm
      class="formSetUp"
      @submit="handleSubmit"
      v-model="formValues"
    >
      <FormulateInput
        name="alias"
        label="Votre Pseudonyme"
        validation="required"
        type="text"
      />

      <FormulateInput
        name="email"
        label="Votre adresse email"
        validation="required|email"
        type="text"
      />

      <FormulateInput
        name="password"
        label="Votre mot de passe"
        validation="required"
        type="text"
      />

      <FormulateInput name="name" label="Votre Nom" validation="required" />

      <FormulateInput
        name="firstname"
        label="Votre Prénom"
        validation="required"
        type="text"
      />

      <FormulateInput class="btn" type="submit" label="Valider" />
    </FormulateForm>
    <h3>{{ formValues }}</h3>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data: () => ({
    formValues: {},
  }),
  methods: {
    handleSubmit() {
      console.log(this.formValues);

      let formValues = this.formValues;

      //⇓⇓ URL de la requête⇓⇓.
      let url = "http://localhost:3000/api/user/signup";

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
          if (success.status == 201) {
            console.log("=====> user created 👍", success);
            this.$router.push("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.formSetUp {
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: black 0px 0px 5px 0px;
  border-radius: 10px;
  background-color: rgba(241, 241, 241, 0.8);
  padding-top: 10px;
}
</style>
