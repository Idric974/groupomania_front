<template>
  <div class="BtnVoirProfil">
    <router-link to="/Profil">
      <h3 v-on:click="voirProfil()">
        <i class="fas fa-user-edit"></i> Voir mon Profil
      </h3></router-link
    >
  </div>
</template>

<script>
export default {
  name: "BtnVoirProfil",
  methods: {
    voirProfil: function() {
      const userIdStorage = localStorage.getItem("groupomania");
      const objJson = JSON.parse(userIdStorage);

      //* ✅ 👉 Définition du body.
      const body = objJson;
      console.log(body);

      //* ✅ 👉 Définition des en-têtes.
      const headers = new Headers();
      headers.append("Content-Type", "application/json; charset=utf-8");

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/user/showUser";

      //* ✅ 👉 Définition des paramètres de la requête.
      const parametresDeRequete = {
        method: "POST",
        body: body,
        headers: headers,
      };

      fetch(url, parametresDeRequete)
        .then(function(response) {
          if (response.status !== 200) {
            console.log(
              "Looks like there was a problem. Status Code: " + response.status
            );
            return;
          }

          // Examine the text in the response
          response.json().then(function(data) {
            console.log(data);
          });
        })
        .catch(function(err) {
          console.log("Fetch Error :-S", err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.BtnVoirProfil {
  border: solid black 1px;
  border-radius: 10px;
  box-shadow: black 0px 0px 5px 0px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  a:link {
    text-decoration: none;
  }
}
</style>
