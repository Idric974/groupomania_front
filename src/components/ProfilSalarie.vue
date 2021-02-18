<template>
  <div class="Profil_Salarie">
    <div class="box_salarie">
      <div class="box fistname">Alias : {{ alias }}</div>
      <div class="box fistname">Email : {{ email }}</div>
      <div class="box fistname">Prénom : {{ firstname }}</div>
      <div class="box name">Nom : {{ name }}</div>
    </div>

    <div class="btn_profil">
      <button class="btnAppli">
        <i class="fas fa-user-plus"></i>Modifier mon profil
      </button>
      <button class="btnAppli">
        <i class="fas fa-user-plus"></i>Modifier mon profil
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profil_Salarie",
  data() {
    const alias = "";
    //console.log("alias :", alias);

    const email = "";
    //console.log("email :", email);

    const firstname = "";
    //console.log("Prénom :", firstname);

    const name = "";
    //console.log("Nom :", name);

    return {
      alias: alias,
      email: email,
      firstname: firstname,
      name: name,
    };
  },

  methods: {
    readAll() {
      const userIdStorage = localStorage.getItem("groupomania");
      const objJson = JSON.parse(userIdStorage);

      const token = objJson.token;

      //* ✅ 👉 Définition des en-têtes.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/comment/readAll/" + this.postId;

      //* ✅ 👉 Définition des paramètres de la requête.
      const parametresDeRequete = {
        method: "GET",
        headers: headers,
      };

      console.log(parametresDeRequete);

      fetch(url, parametresDeRequete)
        .then((success) => {
          console.log(success);
        })
        .catch(function(error) {
          console.log(
            "Il y a eu un problème avec l'opération fetch: " + error.message
          );
        });
    },
  },

  mounted() {
    this.readAll();
  },
};
</script>

<style lang="scss" scoped>
.Profil_Salarie {
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
    font-size: 1.5rem;
    font-weight: bolder;
    background-color: white;
  }

  .btn_profil {
    width: 260px;
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
