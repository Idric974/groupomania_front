<template>
  <div class="create-post">
    <!--✅ 👉 navigation section-->
    <div class="nav-frame">
      <div class="nav-block">
        <div class="btn_acc2"><BtnLogout /></div>
        <div class="btn_acc2"><BtnHome /></div>
      </div>
    </div>

    <div class="content-frame">
      <div class="menu_composant">
        <h1>Créer un poste</h1>
      </div>

      <div class="post-form">
        <form class="form-setup">
          <div class="fieldSeze">
            <label for="title" id="title">
              Le titre de votre post
              <input
                aria-labelledby="title"
                type="text"
                name="title"
                validation="required"
                class="title"
                v-model="input.title"
              />
            </label>
          </div>

          <div class="fieldSeze">
            <label for="content" id="content">
              Rédigez votre poste ici
              <input
                aria-labelledby="content"
                type="text"
                name="content"
                validation="required"
                class="content"
                v-model="input.content"
              />
            </label>
          </div>

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
  </div>
</template>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

<script>
import BtnLogout from "@/components/BtnLogout.vue";
import BtnHome from "@/components/BtnHome.vue";
import { mapState } from "vuex";

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

  computed: {
    ...mapState([
      "firstname",
      "name",
      "alias",
      "userId",
      "admin",
      "id",
      "email",
    ]),
  },

  methods: {
    handleSubmit() {
      const storageToken = localStorage.getItem("groupomania");
      const objJson = JSON.parse(storageToken);
      const token = objJson.token;

      let userId = this.$store.state.id;

      const title = this.input.title;
      const content = this.input.content;

      const values = {
        title: title,
        content: content,
        userId: userId,
      };

      //* ✅ 👉 Définition du body de la requête.
      const body = JSON.stringify(values);

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

      //*✅👉 Exécution de la requête.
      fetch(url, parametresDeRequete)
        .then(() => {
          console.log("%c ✔️ Poste crée", "color:green ;  font-size: 15px");

          this.input.title = "";
          this.input.content = "";
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

  @media screen and (min-width: 742px) and (max-width: 991px) {
    width: 85%;
    height: auto;
    margin: auto;
  }

  @media screen and (min-width: 992px) {
    width: 70%;
    height: auto;
    margin: auto;
  }
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
