<template>
  <div class="comments-box">
    <!--✅ 👉 Affiche les commentaires du post sélectionné-->
    <div class="comments" v-for="comment in userComments" :key="comment.id">
      <div class="alias">
        {{ comment.user.alias }}
      </div>

      <div class="formated-date">{{ comment.formatedDate }}</div>

      <div class="title">
        {{ comment.title }}
      </div>

      <div class="comment">
        {{ comment.comment }}
      </div>

      <div class="setup-button">
        <div class="eddit-supp" v-if="comment.userId == id">
          <router-link
            :to="{ name: 'UpdateComment', params: { id: comment.id } }"
            aria-label="UpdateComment"
            a
            href="#"
            ><button type="submit" class="small">
              Modifier
            </button></router-link
          >
          <button
            type="submit"
            v-on:click="deletComment(comment.id)"
            class="small"
            aria-label="UpdateComment"
            a
            href="#"
          >
            Supprimer
          </button>
        </div>

        <div class="signale" v-else>
          <button
            type="submit"
            v-on:click="reportComment(comment.id)"
            class="small color"
            aria-label="reportComment"
            a
            href="#"
          >
            Signaler
          </button>
        </div>
      </div>
    </div>
    <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->
  </div>
</template>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

<script>
import { mapState } from "vuex";

export default {
  name: "Comments",

  data() {
    return {
      comments: [],
      comment: [],
      state: "",
      date: [],
      logged: "",
    };
  },

  computed: {
    ...mapState(["userComments", "id"]),
  },

  methods: {
    //* ✅ 👉 Supprimer un poste.
    deletComment(comment) {
      const storageToken = localStorage.getItem("groupomania");
      const objJson = JSON.parse(storageToken);
      const token = objJson.token;

      let userId = this.$store.state.userId;

      //* ✅ 👉 Définition du headers.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json");

      //* ✅ 👉 Définition du body de la requête.

      const values = {
        userId: userId,
        token: token,
      };

      const body = JSON.stringify(values);

      //* ✅ 👉 Définition des paramètres de la requête.
      const parametresDeRequete = {
        method: "POST",
        headers: headers,
        body: body,
      };

      //* ✅ 👉 Définition de la params.

      const params = comment;

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/comment/deleteComment/" + params;

      //*✅👉 Exécution de la requête.
      fetch(url, parametresDeRequete)
        .then((success) => {
          alert("Votre commentaire va être supprimé");
          this.$store.dispatch("UPDATE_COMMENT_FEED");

          return success;
        })
        .catch(function(error) {
          console.log(
            "Il y a eu un problème avec l'opération fetch: " + error.message
          );
        });
    },
    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

    //* ✅ 👉 Signaler un commentaire.
    reportComment(id) {
      const storageToken = localStorage.getItem("groupomania");
      const objJson = JSON.parse(storageToken);
      const token = objJson.token;

      //* ✅ 👉 Définition du body de la requête.
      const values = {
        signale: "true",
      };

      const body = JSON.stringify(values);

      //* ✅ 👉 Définition des en-têtes.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json; charset=UTF-8");

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/comment/reportComment/" + id;

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
            alert("⚠️ Ce commentaire a été signalé à l’administrateur ⚠️ ");
          });
        })
        .catch(function(err) {
          console.log("❌❌❌ CATCH a Fetch Error :-S", err);
        });
    },

    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
  },
};
</script>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

<style lang="scss" scoped>
.comments-box {
  width: 100%;

  .comments {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 5px;
    border-radius: 10px;
    box-shadow: black 0px 0px 10px 5px;

    .alias {
      width: 100%;
      height: auto;
      border-radius: 10px 10px 0px 0px;

      font-size: 1.5rem;
      font-weight: bolder;
      padding-bottom: 10px;
    }

    .title {
      width: 100%;
      height: auto;
      height: auto;
      border-radius: 10px 10px 0px 0px;
      font-size: 1.2rem;
      background-color: rgb(236, 236, 236);
      padding-top: 10px;
      padding-bottom: 10px;
      color: black;
      font-weight: bolder;
      border-bottom: solid white 2px;
    }

    .comment {
      width: 100%;
      height: auto;
      border-radius: 0px 0px 10px 10px;
      font-size: 1.1rem;
      background-color: rgb(236, 236, 236);
      padding-top: 10px;
      padding-bottom: 10px;
    }

    .setup-button {
      display: flex;
      justify-content: center;

      .eddit-supp {
        display: flex;
      }
    }

    @media screen and (min-width: 992px) {
      margin: auto;
      width: 80%;
    }
  }
}
</style>
