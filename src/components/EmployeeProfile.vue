<template>
  <div class="employee-profile">
    <div class="employee-box">
      <div class="box ">Alias : {{ users.alias }}</div>
      <div class="box ">Email : {{ users.email }}</div>
      <div class="box ">Prénom : {{ users.firstname }}</div>
      <div class="box ">Nom : {{ users.name }}</div>
    </div>

    <div class="btn_profil">
      <router-link to="updateMyProfil">
        <button class="btn-appli">
          <i class="fas fa-user-plus"></i>Modifier profil
        </button></router-link
      >

      <button class="btn-appli" v-on:click="deleteProfil()">
        <i class="fas fa-user-plus"></i>Supprimer profil
      </button>
    </div>
  </div>
</template>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

<script>
export default {
  name: "EmployeeProfile",
  data() {
    return {
      users: [],
    };
  },

  methods: {
    findOneUser() {
      const userIdStorage = localStorage.getItem("groupomania");

      const objJson = JSON.parse(userIdStorage);

      const token = objJson.token;

      const userId = objJson.userId;

      //* ✅ 👉 Définition des en-têtes.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json");

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/user/findOne/" + userId;

      //* ✅ 👉 Définition des paramètres de la requête.
      const parametresDeRequete = {
        method: "GET",
        headers: headers,
      };

      console.log(parametresDeRequete);

      fetch(url, parametresDeRequete)
        .then((success) => {
          success.json().then((result) => {
            this.users = result.users;
            console.log(this.users);
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    deleteProfil() {
      console.log("Fonction à déveloper");
    },
  },

  mounted() {
    this.findOneUser();
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
