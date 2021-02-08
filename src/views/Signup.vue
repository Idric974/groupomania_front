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

    <formulateForm
      class="formSetUp"
      v-model="formValues"
      @submit="handleSubmit"
      method="post"
      form
      action="/search?"
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

      <formulateInput
        class="btn"
        type="submit"
        label="Valider"
        @click.stop.prevent="submit()"
      />
    </formulateForm>
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
      this.$router.push("/search?" + this.formValues);
    },
  },
};

// const queryString = window.location.search;
// console.log(queryString);
// const urlparams = new URLSearchParams(queryString);
// console.log(urlparams);
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
