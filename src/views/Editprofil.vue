<template>
  <div class="Editprofil">
    <h2>
      <router-link to="/Profil"><i class="fas fa-arrow-left"></i></router-link
      >Modifier mon profil
    </h2>
    <p>
      Modifier ci-dessous les informations que vous souhaitez puis cliquez sur
      le bouton Valider.
    </p>

    <!---------------------------------------------------------------------->

    <div class="Editprofil_form">
      <form>
        <div class="form_champ">
          <label for="alias">Votre pseudonyme</label>
          <input id="alias" v-model="alias" type="text" name="alias" />
        </div>

        <div class="form_champ">
          <label for="firstname">Votre prénom</label>
          <input
            id="firstname"
            v-model="firstname"
            type="text"
            name="firstname"
          />
        </div>

        <div class="form_champ">
          <label for="name">Votre nom</label>
          <input id="name" v-model="name" type="text" name="name" />
        </div>

        <div class="form_champ">
          <label for="email">Votre email</label>
          <input id="email" v-model="email" type="email" name="email" />
        </div>

        <div class="form_champ">
          <label for="password">Votre mot de passe</label>
          <input id="password" v-model="password" type="text" name="password" />
        </div>

        <p>
          <input class="btn" type="submit" value="Valider modifications" />
        </p>
      </form>
    </div>
  </div>
</template>

<script>
//import ProfilSalarie from "@/components/ProfilSalarie.vue";

export default {
  name: "signup",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.form_inscription {
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
