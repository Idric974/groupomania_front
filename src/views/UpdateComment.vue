<template>
  <div class="create-post">
    <div class="btn_acc2"><BtnLogout /></div>
    <div class="btn_acc2"><BtnHome /></div>

    <br />

    <hr />

    <div class="menu_composant">
      <h1>Modifier mon commentaire</h1>
    </div>

    <div class="post-form">
      <form class="form-setup">
        <input
          type="text"
          name="title"
          validation="required"
          class="title"
          v-model="input.title"
        />

        <input
          type="text"
          name="comment"
          validation="required"
          class="comment"
          v-model="input.comment"
        />

        <button
          type="submit"
          v-on:click.prevent="updateComment()"
          class="poster"
        >
          Modifier Commentaire
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
        comment: "",
      },
    };
  },
  methods: {
    readComment() {
      const params = this.$route.params.id;

      const storageToken = localStorage.getItem("groupomania");
      const objJson = JSON.parse(storageToken);
      const token = objJson.token;

      //* ✅ 👉 Définition des en-têtes.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json");

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/comment/findOneComment/" + params;

      //* ✅ 👉 Définition des paramètres de la requête.
      const parametresDeRequete = {
        method: "GET",
        headers: headers,
      };

      fetch(url, parametresDeRequete)
        .then((success) => {
          success.json().then((result) => {
            this.comments = result.comments;
            this.input.title = this.comments.title;
            this.input.content = this.comments.comment;
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

    //* ✅ 👉 Mise à jour du profil enregistrées.
    updateComment() {
      const storage = localStorage.getItem("groupomania");
      const objJson = JSON.parse(storage);
      const token = objJson.token;
      const params = this.$route.params.id;

      const values = {
        title: this.input.title,
        comment: this.input.comment,
      };

      //* ✅ 👉 Définition du body de la requête.
      const body = JSON.stringify(values);

      //* ✅ 👉 Définition des en-têtes.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json; charset=UTF-8");

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/comment/updateComment/" + params;

      //* ✅ 👉 Définition des paramètres de la requête.
      const parametresDeRequete = {
        method: "POST",
        headers: headers,
        body: body,
      };

      fetch(url, parametresDeRequete)
        .then(function(response) {
          if (response.status !== 200) {
            console.log(
              "Looks like there was a problem. Status Code: " + response.status
            );

            return;
          }

          response.json().then(function(data) {
            console.log(data);

            alert("⚠️ Votre commentaire a été modifié ⚠️ ");
          });
        })
        .catch(function(err) {
          console.log("❌❌❌ CATCH a Fetch Error :-S", err);
        });
    },
    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
  },
  mounted() {
    this.readComment();
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
.comment,
.poster {
  font-size: 1.3rem;
}

.comment {
  height: 100px;
  overflow-wrap: break-word;
}
</style>
