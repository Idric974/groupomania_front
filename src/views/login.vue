<template>
  <!-- 👉 View Login 👈-->

  <!--✅ 👉 login_box-->
  <div class="loginBox">
    <div class="login">
      <h1>Me connecter</h1>
      <form>
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
        <button type="button" v-on:click="login()">
          <i class="fas fa-sign-in-alt"></i>
          Connexion
        </button>
      </form>
    </div>

    <!--✅ 👉 Creer mon compte-->
    <router-link to="/Signup"
      ><button>
        <i class="fas fa-user-plus"></i>Créer mon compte
      </button></router-link
    >
    <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->
  </div>
</template>

<script>
export default {
  name: "loginBox",
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
        console.log("✔️✔️✔️ 😃➖➖➖➖➖➖► user logged 👍", success);
        const result = await success.json();
        console.log("✔️✔️✔️ 😃➖➖➖➖➖➖► Id + Token user 👍", result);
        window.localStorage.setItem("groupomania", JSON.stringify(result));
        this.$emit("authenticated", true);
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.loginBox {
  width: 95%;
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: inset 2px 2px 3px rgba(180, 207, 243, 0.8),
    inset -2px -2px 3px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  background-color: rgba(180, 207, 243, 0.8);

  @media screen and (min-width: 742px) and (max-width: 991px) {
    width: 80%;
  }

  @media screen and (min-width: 739px) {
    width: 50%;
  }
}

.login {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}
</style>
