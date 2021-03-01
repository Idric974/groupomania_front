<template>
  <div class="commentsBox">
    <!--✅ 👉 Affiche les commentaires du post sélectionné-->
    <div class="comments" v-for="comment in comments" :key="comment.id">
      <div class="userName">
        De:
        {{ comment.user.alias }}
      </div>

      <div class="formatedDate">{{ comment.formatedDate }}</div>

      <div class="comment">
        {{ comment.comment }}
      </div>
    </div>
    <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->
  </div>
</template>

<script>
import { FORMAT_DATE } from "../services/utilities";
export default {
  name: "Comments",
  data: () => ({
    comments: [],
  }),

  methods: {
    params() {
      // const params = this.$route.params.id;
      // console.log("✔️✔️✔️ 😃➖➖➖➖➖➖► Post Id", params);
    },
    //* ✅ 👉 Afficher le poste.
    findOne() {
      const params = this.$route.params.id;
      console.log("✔️✔️✔️ 😃➖➖➖➖➖➖► Post Id", params);

      const infoStorage = localStorage.getItem("groupomania");
      const objJson = JSON.parse(infoStorage);

      //const userId = objJson.userId;
      //console.log("✔️✔️✔️ 😃➖➖➖➖➖➖► userId", userId);

      const userToken = objJson.token;
      //console.log("✔️✔️✔️ 😃➖➖➖➖➖➖► userToken", objJson.token);

      const headers = new Headers();
      headers.append("Authorization", `Bearer ${userToken}`);

      // //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/comment/readAllcomments/" + params;

      // //* ✅ 👉 Définition des paramètres de la requête.
      const parametresDeRequete = {
        method: "GET",
        headers: headers,
      };

      fetch(url, parametresDeRequete)
        .then((success) => {
          success.json().then((result) => {
            this.comments = result.comments.map((comment) => {
              comment.formatedDate = FORMAT_DATE(comment.createdAt);
              return comment;
            });
            console.log(this.comments);
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },

  mounted() {
    this.params();
    this.findOne();
  },
};
</script>

//*✅👉 ➖➖➖➖➖➖➖➖➖CSS➖➖➖➖➖➖➖➖➖➖➖
<style lang="scss" scoped>
.commentsBox {
  width: 100%;
  height: auto;

  .comments {
    width: 100%;
    height: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-top: 5px;
    border-radius: 10px;
    box-shadow: black 0px 0px 10px 5px;
    // border: solid blue 1px;

    .userName {
      width: 100%;
      height: auto;
      border-radius: 10px 10px 0px 0px;

      font-size: 1.5rem;
      font-weight: bolder;
      padding-bottom: 10px;
    }

    .comment {
      width: 100%;
      height: auto;
      border-radius: 0px 0px 10px 10px;
      font-size: 1.1rem;
      background-color: rgb(255, 215, 215);
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
}
</style>
