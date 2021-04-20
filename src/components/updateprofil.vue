<template>
  <!-- 👉 views Signup 👈-->

  <div class="updateprofil">
    <div class="instruction">
      <p class="instruction-text">
        Pour modifier votre profil, veuillez compléter le formulaire ci-dessous.
      </p>
    </div>
    <!---------------------------------------------------------------------->

    <form class="form-setup">
      <label for="">Alias</label>
      <input
        name="alias"
        label="Votre Pseudonyme"
        validation="required"
        type="text"
        class="field"
        v-model="input.alias"
      />
      <label for="email">Email</label>
      <input
        name="email"
        label="Votre adresse email"
        validation="required|email"
        type="text"
        class="field"
        v-model="input.email"
      />
      <label for="name">Name</label>
      <input
        name="name"
        label="Votre Nom"
        validation="required"
        class="field"
        v-model="input.name"
      />
      <label for="firstname">Firstname</label>
      <input
        name="firstname"
        label="Votre Prénom"
        validation="required"
        type="text"
        class="field"
        v-model="input.firstname"
      />

      <button type="submit" v-on:click.prevent="updateProfil()">
        Valider les modifications
      </button>
    </form>
  </div>
</template>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

<script>
import { mapState } from "vuex";

export default {
  name: "updateprofil",
  components: {},
  data() {
    return {
      input: { alias: "", email: "", password: "", name: "", firstname: "" },
    };
  },

  computed: {
    ...mapState([
      "firstname",
      "name",
      "alias",
      "userId",
      "admin",
      "id",
      "email",
    ]),
  },

  //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

  methods: {
    //* ✅ 👉 Rester coonecté.
    stayLoggedIn() {
      this.$store.dispatch("LOGGED_USER");
      if (this.alias != null) {
        this.input.alias = this.alias;
        this.input.email = this.email;
        this.input.name = this.name;
        this.input.firstname = this.firstname;
      }
    },
    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

    //* ✅ 👉 Mise à jour du profil enregistrées.
    updateProfil() {
      const storageToken = localStorage.getItem("groupomania");
      const objJson = JSON.parse(storageToken);
      const token = objJson.token;

      let userId = this.$store.state.id;

      const values = {
        alias: this.input.alias,
        email: this.input.email,
        name: this.input.name,
        firstname: this.input.firstname,
      };

      //* ✅ 👉 Définition du body de la requête.
      const body = JSON.stringify(values);

      //* ✅ 👉 Définition des en-têtes.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json; charset=UTF-8");

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/user/updateOne/" + userId;

      //* ✅ 👉 Définition des paramètres de la requête.
      const parametresDeRequete = {
        method: "POST",
        headers: headers,
        body: body,
      };

      //*✅👉 Exécution de la requête.
      fetch(url, parametresDeRequete)
        .then((success) => {
          this.$store.dispatch("LOGGED_USER");
          alert("Votre profil à été modifié");
          window.history.go(-1);

          return success;
        })
        .catch(function(error) {
          console.log(
            "Il y a eu un problème avec l'opération fetch: " + error.message
          );
        });
    },
    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
  },

  mounted() {
    this.stayLoggedIn();
  },
};
</script>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

<style scoped lang="scss">
.form-setup {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: black 0px 0px 5px 0px;
  border-radius: 10px;
  box-shadow: inset 2px 2px 3px rgba(180, 207, 243, 0.8),
    inset -2px -2px 3px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  background-color: rgba(180, 207, 243, 0.8);
  padding-top: 10px;
  margin-top: 10px;

  @media screen and (min-width: 742px) and (max-width: 991px) {
    margin: auto;
    width: 93%;
  }

  @media screen and (min-width: 992px) {
    margin: auto;
    width: 60%;
  }
}

.field {
  margin-bottom: 20px;
  width: 95%;
}

label {
  font-size: 1.2rem;
  font-weight: bolder;
}
</style>
