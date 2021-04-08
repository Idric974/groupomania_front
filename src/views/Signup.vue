<template>
  <!-- 👉 views Signup 👈-->

  <div class="Signup">
    <!--✅ 👉 Bouton page accueil-->
    <div class="home-btn">
      <div><BtnLogin /></div>
    </div>
    <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->

    <div class="instruction">
      <p class="instruction-text">
        Pour vous connecter à votre réseau social, veuillez compléter le
        formulaire ci-dessous.
      </p>
    </div>

    <!---------------------------------------------------------------------->

    <FormulateForm
      class="form-setup"
      @submit="handleSubmit"
      v-model="formValues"
    >
      <FormulateInput
        name="alias"
        label="Votre Pseudonyme"
        validation="required"
        type="text"
        class="field"
      />

      <FormulateInput
        name="email"
        label="Votre adresse email"
        validation="required|email"
        type="text"
        class="field"
      />

      <FormulateInput
        name="password"
        label="Votre mot de passe"
        validation="required"
        type="text"
        class="field"
      />

      <FormulateInput
        name="name"
        label="Votre Nom"
        validation="required"
        class="field"
      />

      <FormulateInput
        name="firstname"
        label="Votre Prénom"
        validation="required"
        type="text"
        class="field"
      />

      <button type="submit">Valider</button>
    </FormulateForm>
  </div>
</template>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

<script>
import BtnLogin from "@/components/BtnLogin.vue";
export default {
  name: "Signup",
  components: { BtnLogin },
  data: () => ({
    formValues: {},
  }),
  methods: {
    handleSubmit() {
      let formValues = this.formValues;

      let url = "http://localhost:3000/api/user/signup";

      const headers = new Headers();
      headers.append("Content-Type", "application/json; charset=utf-8");

      const parametresDeRequete = {
        method: "POST",
        body: JSON.stringify(formValues),
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
</style>
