<template>
  <div class="login">
    <div class="login">
      <h1>Me connecter</h1>
      <input
        type="text"
        name="username"
        v-model="input.username"
        placeholder="Votre nom utilisateur"
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
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == this.$parent.mockAccount.username &&
          this.input.password == this.$parent.mockAccount.password
        ) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "home" });
        } else {
          console.log("The username and / or password is incorrect");
          alert("Le nom d'utilisateur et / ou le mot de passe sont incorrects");
        }
      } else {
        console.log("A username and password must be present");
        alert(
          "Pour vous connecter, veuillez renseigner à nom d'utilisateur et un mot de passe."
        );
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
