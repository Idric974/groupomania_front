<template>
  <div class="sinscrire">
    <h2>S'inscrire</h2>
    <p class="instruction">
      Pour vous inscrire à votre réseau social d'entreprise, veuillez saisir à
      l'identifiant et un mot de passe..
    </p>
    <div class="form_connexion">
      <img alt="Vue logo" src="../assets/icon-above-font.png" />
      <div class="form_connexion_input">
        <input
          type="text"
          name="Username"
          v-model="input.username"
          placeholder="Entrez ici un nom utilisateur"
        />
      </div>

      <div class="form_connexion_input">
        <input
          type="password"
          name="password"
          v-model="input.password"
          placeholder="Entrez ici  mot de passe"
        />
      </div>

      <div class="form_connexion_input">
        <button type="button" class="btn" v-on:click="login()">
          Me connecter
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sinscrire",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
};
</script>

<style scoped lang="scss">
img {
  width: 150px;
}

.instruction {
  font-weight: bolder;
  margin-bottom: 20px;
  color: black;
}

.sinscrire {
  width: 98%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
}

.form_connexion {
  border: solid black 1px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: block;
  flex-direction: row;
  box-shadow: black 0px 0px 10px 5px;
  background-color: rgb(240, 240, 240);
}

input {
  padding: 10px 10px 10px 10px;
  margin: 10px 10px 10px 10px;
  text-align: center;
  border-radius: 10px;
}

input:hover {
  border: solid 2px rgb(6, 153, 6);
}

.btn {
  width: 200px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 0;
  line-height: 2.5;
  padding: 0 20px;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  border-radius: 10px;
  background-color: rgb(6, 153, 6);
  background-image: linear-gradient(
    to top left,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2) 30%,
    rgba(0, 0, 0, 0)
  );
  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6),
    inset -2px -2px 3px rgba(0, 0, 0, 0.6);

  @media screen and (min-width: 742px) and (max-width: 991px) {
    width: 200px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 991px) {
    width: 250px;
    margin-top: 10px;
    margin-right: 10px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
