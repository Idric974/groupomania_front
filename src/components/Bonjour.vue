<template>
  <div class="bonjour">
    Bonjour {{ users.firstname }} {{ users.name }}

    <div>userId est : {{ userIdInfo }}</div>
  </div>
</template>

<script>
export default {
  name: "BtnLogout",

  data() {
    return {
      users: [],
      vue: "",
      userId: "",
    };
  },

  methods: {
    async findOneUser() {
      try {
        const storageToken = localStorage.getItem("groupomania");
        const objJson = JSON.parse(storageToken);
        const token = objJson.token;

        let userId = this.$store.state.loggedUser;

        this.userIdInfo = userId;

        const headers = new Headers();
        headers.append("Authorization", `Bearer ${token}`);
        headers.append("Content-Type", "application/json");

        let url = "http://localhost:3000/api/user/findOne/" + userId;

        const parametresDeRequete = {
          method: "GET",
          headers: headers,
        };

        await fetch(url, parametresDeRequete).then((success) => {
          success.json().then((result) => {
            this.users = result.users;
          });
        });
      } catch (e) {
        console.log(
          "%c ❌ BONJOUR CATCH ERROR ===>>",
          "color:orange ;  font-size: 15px",
          e
        );
      }
    },
  },

  mounted() {
    this.findOneUser();
  },
};
</script>

<style></style>
