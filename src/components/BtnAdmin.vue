<template>
  <div class="btn-appli" v-if="state == '1'">
    <router-link to="/Reported"
      ><h3><i class="fas fa-sign-out-alt"></i> Admin</h3></router-link
    >
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
      const userIdStorage = localStorage.getItem("groupomania");

      const objJson = JSON.parse(userIdStorage);
      const token = objJson.token;

      const UserIdJson = JSON.parse(userIdStorage);
      const userId = UserIdJson.userId;

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
            console.log(
              "✔️✔️✔️ 😃➖➖➖➖➖➖► User State =",
              this.users.admin
            );
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
