<template>
  <!-- 👉 views Signup 👈-->

  <div class="Signup">
    <!--✅ 👉 Bouton page accueil-->
    <div class="home-btn align">
      <div><BtnLogin /></div>
    </div>
    <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->

    <div class="instruction">
      <h1 class="instruction-text">
        Pour vous connecter à votre réseau social, veuillez compléter le
        formulaire ci-dessous.
      </h1>
    </div>

    <!---------------------------------------------------------------------->

    <form id="#reg" class="form-setup">
      <div class="fieldSeze">
        <label for="alias" id="alias"
          >Votre alias
          <input
            aria-labelledby="alias"
            type="text"
            name="alias"
            v-model="input.alias"
            validation="required"
          />
        </label>
      </div>

      <div class="fieldSeze">
        <label for="email" id="email"
          >Votre adresse email
          <input
            aria-labelledby="email"
            type="text"
            name="email"
            v-model="input.email"
            validation="required|email"
          />
          <small id="smallEmailFalse"></small>
        </label>
      </div>

      <div class="fieldSeze">
        <label for="password" id="password"
          >Votre mot de passe
          <input
            aria-labelledby="password"
            type="text"
            name="password"
            v-model="input.password"
            validation="required"
          />
        </label>
      </div>

      <div class="fieldSeze">
        <label for="name" id="name"
          >Votre Nom
          <input
            aria-labelledby="name"
            type="text"
            name="name"
            v-model="input.name"
            validation="required"
          />
        </label>
      </div>

      <div class="fieldSeze">
        <label for="firstname" id="firstname"
          >Votre Prénom
          <input
            aria-labelledby="firstname"
            type="text"
            name="firstname"
            v-model="input.firstname"
            validation="required"
          />
        </label>
      </div>

      <div>
        <button type="submit" v-on:click.prevent="handleSubmit()" handleSubmit>
          Valider
        </button>
      </div>
    </form>
  </div>
</template>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

<script>
import BtnLogin from "@/components/BtnLogin.vue";
export default {
  name: "Signup",
  components: { BtnLogin },
  data() {
    return {
      input: {
        alias: "",
        email: "",
        password: "",
        name: "",
        firstname: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      let url = "http://localhost:3000/api/user/signup";

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

      fetch(url, parametresDeRequete)
        .then((success) => {
          if (success.status == 201) {
            console.log(
              "%c ✔️ ⚠️ User Created  ⚠️",
              "color:green ;  font-size: 15px"
            );
            this.$router.push("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

<style scoped>
.form-setup {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: black 0px 0px 5px 0px;
  border-radius: 10px;
  box-shadow: inset 2px 2px 3px rgba(180, 207, 243, 0.8),
    inset -2px -2px 3px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  background-color: rgba(180, 207, 243, 0.8);
  padding-top: 10px;
  margin-top: 10px;
}

.field {
  width: 100%;
}

.align {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
