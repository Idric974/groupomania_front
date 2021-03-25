<template>
  <div class="bonjour">Bonjour {{ users.firstname }} {{ users.name }}</div>
</template>

<script>
export default {
  name: "BtnLogout",

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

      fetch(url, parametresDeRequete)
        .then((success) => {
          success.json().then((result) => {
            this.users = result.users;
            //console.log(this.users);
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

<style></style>
