<template>
  <div class="Profil_Salarie">
    <div class="box_salarie">
      <div class="box fistname">Alias : {{ alias }}</div>
      <div class="box fistname">Email : {{ email }}</div>
      <div class="box fistname">Prénom : {{ firstname }}</div>
      <div class="box name">Nom : {{ name }}</div>
    </div>

    <hr />

    <div class="btn_profil">
      <button class="btn3">
        <i class="fas fa-user-plus"></i>Modifier mon profil
      </button>
      <button class="btn4">
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

  .btn3 {
    background-color: rgb(0, 137, 216);
  }

  .btn4 {
    background-color: rgb(216, 50, 0);
  }
}
</style>
