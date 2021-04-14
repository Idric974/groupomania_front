<template>
  <div class="create-post">
    <!--✅ 👉 navigation section-->
    <div class="nav-frame">
      <div class="nav-block">
        <div><BtnLogout /></div>
        <div><BtnHome /></div>
      </div>
    </div>

    <div class="menu_composant">
      <h1>Modifier mon poste</h1>
    </div>

    <div class="content-frame">
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
            name="content"
            validation="required"
            class="content"
            v-model="input.content"
          />

          <button
            type="submit"
            v-on:click.prevent="updatePost()"
            class="poster"
          >
            Modifier Poste
          </button>
        </form>
      </div>
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
    readPost() {
      const params = this.$route.params.id;

      const storageToken = localStorage.getItem("groupomania");
      const objJson = JSON.parse(storageToken);
      const token = objJson.token;

      //* ✅ 👉 Définition des en-têtes.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json");

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/post/findOne/" + params;

      //* ✅ 👉 Définition des paramètres de la requête.
      const parametresDeRequete = {
        method: "GET",
        headers: headers,
      };

      fetch(url, parametresDeRequete)
        .then((success) => {
          success.json().then((result) => {
            this.posts = result.posts;
            this.input.title = this.posts.title;
            this.input.content = this.posts.content;
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

    //* ✅ 👉 Mise à jour du profil enregistrées.
    updatePost() {
      const storage = localStorage.getItem("groupomania");
      const objJson = JSON.parse(storage);
      const token = objJson.token;
      const params = this.$route.params.id;

      const values = {
        title: this.input.title,
        content: this.input.content,
      };

      //* ✅ 👉 Définition du body de la requête.
      const body = JSON.stringify(values);

      //* ✅ 👉 Définition des en-têtes.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json; charset=UTF-8");

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/post/updatePost/" + params;

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

            alert("⚠️ Votre poste a été modifié ⚠️ ");
          });
          window.location.href = "/home#/home";
        })
        .catch(function(err) {
          console.log("❌❌❌ CATCH a Fetch Error :-S", err);
        });
    },
    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
  },
  mounted() {
    this.readPost();
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

  @media screen and (min-width: 992px) {
    margin: auto;
    width: 80%;
  }
}

.title,
.content,
.poster {
  font-size: 1.3rem;
}

.content {
  height: 100px;
  overflow-wrap: break-word;
}
</style>
