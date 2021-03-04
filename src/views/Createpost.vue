<template>
  <div class="create-post">
    <div class="btn_acc2"><BtnLogout /></div>
    <div class="btn_acc2"><BtnHome /></div>
    <br />

    <hr />

    <div class="menu_composant">
      <h1>Créer un poste</h1>
    </div>

    <div class="post-form">
      <FormulateForm
        class="form-setup"
        @submit="handleSubmit"
        v-model="formValues"
      >
        <FormulateInput
          type="text"
          name="title"
          label="Le titre de votre post"
          validation="required"
        />

        <FormulateInput
          type="text"
          name="content"
          label="Votre Post"
          validation="required"
        />

        <button type="submit">Poster le texte</button>
      </FormulateForm>
    </div>
  </div>
</template>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

<script>
import BtnLogout from "@/components/BtnLogout.vue";
import BtnHome from "@/components/BtnHome.vue";
export default {
  components: { BtnHome, BtnLogout },
  name: "CreatePost",
  data: () => ({
    formValues: {},
  }),
  methods: {
    handleSubmit() {
      const userIdStorage = localStorage.getItem("groupomania");
      const objJson = JSON.parse(userIdStorage);

      const data = this.formValues;

      const token = objJson.token;
      console.log(objJson.token);

      const values = {
        title: data.title,
        content: data.content,
        userId: objJson.userId,
      };

      //* ✅ 👉 Définition du body de la requête.
      const body = JSON.stringify(values);
      console.log(body);

      //* ✅ 👉 Définition des en-têtes de la requête.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json");

      //* ✅ 👉 Définition des paramètres de la requête.
      const parametresDeRequete = {
        method: "POST",
        body: body,
        headers: headers,
      };

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/post/createPost";

      console.log(parametresDeRequete);

      //*✅👉 Exécution de la requête.
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
};
</script>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖
<style scoped lang="scss">
.create-post {
  width: 100%;
}

input {
  border: solid black 1px;
}

.post-form {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: black 0px 0px 5px 0px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(180, 207, 243, 0.8);
}
</style>
