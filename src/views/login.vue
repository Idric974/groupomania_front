<template>
  <div class="login_box">
    <div class="login">
      <h1>Me connecter</h1>
      <input
        type="email"
        name="email"
        v-model="input.email"
        placeholder="Votre adresse mail"
      />
      <input
        type="password"
        name="password"
        v-model="input.password"
        placeholder="Votre mot de passe"
      />
      <button class="btn" type="button" v-on:click="login()">Connexion</button>
    </div>

    <p class="creer_compte btn2">
      <router-link to="/Signup">
        <i class="fas fa-user-plus"></i>Créer mon compte
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      input: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      //⇓⇓ URL de la requête⇓⇓.
      let url = "http://localhost:3000/api/user/login";

      const headers = new Headers();
      headers.append("Content-Type", "application/json; charset=utf-8");

      //⇓⇓ Paramètres de la requête⇓⇓.
      const parametresDeRequete = {
        method: "POST",
        body: JSON.stringify(this.input),
        headers: headers,
      };

      const success = await fetch(url, parametresDeRequete);

      if (success.status == 200) {
        console.log("=====> user logged 👍", success);
        const result = await success.json();
        console.log(result);
        window.localStorage.setItem("groupomania", JSON.stringify(result));
        this.$emit("authenticated", true);
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>

<style scoped>
.login_box {
  width: 95%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: black 0px 0px 5px 0px;
  border-radius: 10px;
  background-color: rgba(241, 241, 241, 0.8);
}

.login {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}

.creer_compte {
  color: red;
  font-weight: bolder;
  font-size: 1.1rem;
}
</style>
