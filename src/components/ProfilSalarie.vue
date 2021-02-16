<template>
  <div class="Profil_Salarie">
    <div class="box_salarie">
      <div class="photo"></div>

      <div class="box fistname">Alias : {{ alias }}</div>
      <div class="box fistname">Email : {{ email }}</div>
      <div class="box fistname">Prénom : {{ firstname }}</div>
      <div class="box name">Nom : {{ name }}</div>

      <hr />

      <p class="creer_compte btn2">
        <router-link to="/Editprofil">
          <i class="fas fa-user-plus"></i>Modifier mon profil
        </router-link>
      </p>

      <p class="creer_compte btn2">
        <router-link to="">
          <i class="fas fa-user-plus"></i>Supprimer mon profil
        </router-link>
      </p>
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
};
</script>

<style lang="scss" scoped>
.Profil_Salarie {
  //border: solid black 1px;
  border-radius: 10px;
  box-shadow: black 0px 0px 5px 0px;
  margin-top: 10px;
  margin-bottom: 10px;
  widows: 100%;
  height: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: rgb(245, 238, 238);

  a:link {
    text-decoration: none;
  }

  img {
    width: 300px;
    height: auto;
    border-radius: 50%;
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

  .titre {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 10px;
    font-size: 2.5rem;
    font-weight: bolder;
  }

  .creer_compte {
    font-weight: bolder;
    font-size: 1.1rem;
    margin-top: 20px;
  }
}
</style>
