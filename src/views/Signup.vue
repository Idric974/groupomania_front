<template>
  <div class="Signup">
    <h2>
      <router-link to="/login"><i class="fas fa-arrow-left"></i></router-link
      >Page inscription
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
      <formulateInput
        name="alias"
        label="Votre Pseudonyme"
        validation="required"
      />
      <formulateInput
        name="email"
        label="Votre adresse email"
        validation="required|email"
      />
      <formulateInput
        name="password"
        label="Votre mot de passe"
        validation="required"
      />
      <formulateInput name="name" label="Votre Nom" validation="required" />
      <formulateInput
        name="firstname"
        label="Votre Prénom"
        validation="required"
      />

      <formulateInput class="btn" type="submit" label="Valider" />
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

      //⇓⇓ Paramètres de la requête⇓⇓.
      const parametresDeRequete = {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: new Headers({
          "Content-Type": "application/json; charset=UTF-8 ",
        }),
      };

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
