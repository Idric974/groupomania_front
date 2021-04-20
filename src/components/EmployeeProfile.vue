<template>
  <div class="employee-profile">
    <div class="employee-box">
      <div class="box ">Alias : {{ alias }}</div>
      <div class="box ">Email : {{ email }}</div>
      <div class="box ">Prénom : {{ firstname }}</div>
      <div class="box ">Nom : {{ name }}</div>
    </div>

    <div class="btn_profil">
      <router-link to="updateMyProfil">
        <button class="btn-appli-action">
          <i class="fas fa-user-plus"></i>Modifier profil
        </button></router-link
      >

      <button class="btn-appli-action" v-on:click="deleteUser()">
        <i class="fas fa-user-plus"></i>Supprimer profil
      </button>
    </div>
  </div>
</template>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

<script>
import { mapState } from "vuex";

export default {
  name: "EmployeeProfile",
  data() {
    return {
      users: [],
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

  methods: {
    //* ✅ 👉 Rester coonecté.
    stayLoggedIn() {
      this.$store.dispatch("LOGGED_USER");
    },
    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

    //* ✅ 👉 Supprimer le profil utilisateur.
    deleteUser() {
      //* ✅ 👉 Définition du headers.
      const storageToken = localStorage.getItem("groupomania");
      const objJson = JSON.parse(storageToken);
      const token = objJson.token;

      let userId = this.$store.state.id;

      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json");

      // //* ✅ 👉 Définition du body de la requête.

      const values = {
        userId: userId,
        token: token,
      };

      const body = JSON.stringify(values);

      //* ✅ 👉 Définition des paramètres de la requête.
      const parametresDeRequete = {
        method: "POST",
        headers: headers,
        body: body,
      };

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/user/deleteUser/" + userId;

      //*✅👉 Exécution de la requête.
      fetch(url, parametresDeRequete)
        .then((success) => {
          alert("Votre profil Va être supprimé");

          window.location.href = "/home";

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

<style lang="scss" scoped>
.employee-profile {
  //border: solid black 1px;

  border-radius: 10px;
  box-shadow: black 0px 0px 5px 1px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: rgb(226, 226, 226);

  @media screen and (min-width: 742px) and (max-width: 991px) {
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }

  @media screen and (min-width: 992px) {
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }

  .box {
    border: solid black 1px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 1.5rem;
    font-weight: bolder;
    background-color: white;
  }

  .btn_profil {
    width: 300px;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  button {
    margin-top: 10px;
    border-radius: 10px;
    padding: 5px 10px 5px 10px;
    font-weight: bolder;
    font-size: 1.2rem;
  }
}
</style>
