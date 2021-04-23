<template>
  <!-- 👉 View Login 👈-->

  <!--✅ 👉 login_box-->
  <div class="login-Box">
    <div class="login">
      <h1>Me connecter</h1>
      <form id="#reg">
        <div class="fieldSeze">
          <label for="name" id="name"
            >Votre email
            <input
              aria-labelledby="email"
              type="email"
              name="email"
              v-model="input.email"
              validation="required"
            />
            <small id="smallEmailFalse"></small>
          </label>
        </div>

        <div class="fieldSeze">
          <label for="password" id="password"
            >Votre mot de passe password
            <input
              aria-labelledby="password"
              type="password"
              name="password"
              v-model="input.password"
              validation="required"
            />
          </label>
        </div>
        <div>
          <button type="button" v-on:click="login()">
            <i class="fas fa-sign-in-alt"></i>
            Connexion
          </button>
        </div>
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

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

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
      try {
        const headers = new Headers();
        headers.append("Content-Type", "application/json; charset=utf-8");

        //*********************************************************** */
        //*********************************************************** */
        //*********************************************************** */

        //* ✅ 👉 Validation des champs formulaire avec regex.

        let form = document.querySelector("#reg");
        console.log(form);

        let smallEmailFalse = document.querySelector("#smallEmailFalse");
        console.log(smallEmailFalse);

        const inputEmail = this.input.email;
        //console.log(inputEmail);

        //Création de l'expression régulière
        let emailRegExp = new RegExp(
          "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
          "g"
        );

        let values;

        //Test de l'expression
        if (emailRegExp.test(inputEmail)) {
          console.log("email valide");

          values = this.input;

          console.log(values);
        } else {
          console.log("email  non valide");
          smallEmailFalse.innerHTML = "Adresse email non valide";

          return;
        }

        //*********************************************************** */
        //*********************************************************** */
        //*********************************************************** */

        const parametresDeRequete = {
          method: "POST",
          body: JSON.stringify(values),
          headers: headers,
        };

        let url = "http://localhost:3000/api/user/login";

        const success = await fetch(url, parametresDeRequete);

        if (success.status == 200) {
          const result = await success.json();
          let token = {
            token: result.token,
          };

          window.localStorage.setItem("groupomania", JSON.stringify(token));

          this.$router.push({ name: "home" });

          console.log(
            "%c ✔️ logged in user",
            "color:green ;  font-size: 15px "
          );
        }
      } catch (e) {
        alert("Hello");
        console.log(
          "%c ❌ CATCH ERROR LOGGED",
          "color:orange ;  font-size: 15px",
          e
        );
      }
    },
  },
};
</script>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

<style scoped lang="scss">
.login-Box {
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
    width: 70%;
  }

  @media screen and (min-width: 992px) {
    width: 30%;
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
