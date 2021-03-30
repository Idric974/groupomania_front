<template>
  <div class="btn-appli" v-if="state == '1'">
    <div class="font">
      <i class="fas fa-users-cog"></i>
    </div>
    <div class="btn-title">
      <router-link to="/Reported"><h3>Administrateur</h3></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BtnLogout",
  data() {
    return {
      state: "",
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

            if (this.users.admin !== true) {
              this.state = 0;
            } else {
              this.state = 1;
            }
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },

  mounted() {
    this.findOneUser();
  },
};
</script>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

<style lang="scss" scoped></style>
