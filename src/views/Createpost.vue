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
      <form class="form-setup">
        <input
          type="text"
          name="title"
          placeholder="Le titre de votre post"
          validation="required"
          class="title"
          v-model="input.title"
        />

        <input
          type="text"
          name="content"
          placeholder="Rédigez votre poste ici"
          validation="required"
          class="content"
          v-model="input.content"
        />

        <button
          type="submit"
          v-on:click.prevent="handleSubmit()"
          class="poster"
        >
          Poster
        </button>
      </form>
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
  data() {
    return {
      input: {
        title: "",
        content: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      const userIdStorage = localStorage.getItem("groupomania");
      const objJson = JSON.parse(userIdStorage);

      const token = objJson.token;
      console.log(objJson.token);

      const title = this.input.title;
      const content = this.input.content;

      const values = {
        title: title,
        content: content,
        userId: objJson.userId,
      };
      console.log(values);

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

.title,
.content,
.poster {
  font-size: 1.3rem;
}

.content {
  height: 100px;
}
</style>
