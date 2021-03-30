<template>
  <div class="bonjour" v-if="vue == '1'">
    Bonjour {{ users.firstname }} {{ users.name }}
  </div>
</template>

<script>
export default {
  name: "BtnLogout",

  data() {
    return {
      users: [],
      vue: "",
    };
  },

  methods: {
    findOneUser() {
      const storageToken = localStorage.getItem("groupomania");
      const objJson = JSON.parse(storageToken);
      const token = objJson.token;

      let userInfo = this.$store.state;
      let userId = userInfo.loggedUser;

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

            if (result.users.length == null) {
              this.vue = 1;
            }
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
