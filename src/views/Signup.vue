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

    <div class="form_inscription">
      <form id="signup-form">
        <div class="form_champ">
          <label for="alias">Votre pseudonyme</label>
          <input id="alias" v-model.trim="alias" type="text" name="alias" />
        </div>

        <div class="form_champ">
          <label for="firstname">Votre prénom</label>
          <input
            id="firstname"
            v-model.trim="firstname"
            type="text"
            name="firstname"
          />
        </div>

        <div class="form_champ">
          <label for="name">Votre nom</label>
          <input id="name" v-model.trim="name" type="text" name="name" />
        </div>

        <div class="form_champ">
          <label for="email">Votre email</label>
          <input id="email" v-model.trim="email" type="email" name="email" />
        </div>

        <div class="form_champ">
          <label for="password">Votre mot de passe</label>
          <input
            id="password"
            v-model.trim="password"
            type="text"
            name="password"
          />
        </div>

        <p>
          <input class="btn" type="submit" value="Créer mon compte" />
        </p>
      </form>
    </div>
    <div>{{ password }}</div>
  </div>
</template>

<script>
export default {
  name: "signup",
};

import Vue from "vue";
const app = new Vue({
  data() {
    return { alias: "", firstname: "", name: "", email: "", password: "" };
  },
});

console.log(app);

//⇓⇓ Récupérer l’information désirée dans l’URL de la page affichée⇓⇓.
const queryString = window.location.search;

//⇓⇓ Affiche l'information ciblée dans la console⇓⇓
console.log(queryString);

//⇓⇓ Récupérer les données de façon formaté⇓⇓
const urlparams = new URLSearchParams(queryString);

//⇓⇓ Affiche les données de façon formaté dans la console⇓⇓
console.log(urlparams);
</script>

<style scoped>
#signup-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: black 0px 0px 5px 0px;
  border-radius: 10px;
  background-color: rgba(241, 241, 241, 0.8);
  padding-top: 10px;
}

.form_champ {
  display: flex;
  flex-direction: column;
}
</style>
