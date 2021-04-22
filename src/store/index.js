import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { FORMAT_DATE } from "../services/utilities";

export default new Vuex.Store({
  state: {
    alias: "",
    firstname: "",
    name: "",
    userId: "",
    admin: "",
    id: "",
    email: "",
    userComments: "",
    reportedPosts: "",
    reportedComments: "",
    selectedPost: "",
    postUserIds: "",
    selectedPostDate: "",
    readAllPost: "",
    readAllComments: "",
  },

  mutations: {
    SET_USER(state, payload) {
      state.name = payload.name;
      state.firstname = payload.firstname;
      state.alias = payload.alias;
      state.userId = payload.userId;
      state.admin = payload.admin;
      state.id = payload.id;
      state.email = payload.email;
    },

    SET_NEW_COMMENT(state, payload) {
      state.userComments = payload;
    },

    SET_NEW_REPORTED_POST(state, payload) {
      state.reportedPosts = payload;
    },

    SET_NEW_REPORTED_COMMENT(state, payload) {
      state.reportedComments = payload;
    },

    SET_POST(state, payload) {
      state.selectedPost = payload;
      state.postUserIds = payload.userId;
    },

    SET_POST_DATE(state, payload) {
      state.selectedPostDate = payload;
    },

    SET_ALL_POST(state, payload) {
      state.readAllPost = payload;
    },

    SET_ALL_COMMENTS(state, payload) {
      state.userComments = payload;
    },
  },
  actions: {
    //* ✅ 👉 Récupérer les informations de l'utilisateur connecté.

    async LOGGED_USER({ commit }) {
      try {
        const storageToken = localStorage.getItem("groupomania");
        const objJson = JSON.parse(storageToken);
        const token = objJson.token;

        const headers = new Headers();
        headers.append("Authorization", `Bearer ${token}`);
        headers.append("Content-Type", "application/json");

        let url = "http://localhost:3000/api/user/userInfo/" + token;

        const parametresDeRequete = {
          method: "GET",
          headers: headers,
        };

        await fetch(url, parametresDeRequete).then((success) => {
          success.json().then((result) => {
            commit("SET_USER", result.users);
          });
        });
      } catch (e) {
        console.log(
          "%c ❌❌❌❌❌ CATCH ERROR ===>> FIND_LOGGED_USER",
          "color:orange ;  font-size: 15px",
          e
        );
      }
    },

    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

    //* ✅ 👉 Afficher les commentaires signalé.
    SHOW_ALL_REPORTED_POST({ commit }) {
      const storageToken = localStorage.getItem("groupomania");
      const objJson = JSON.parse(storageToken);
      const token = objJson.token;

      let userId = this.state.userId;

      //* ✅ 👉 Définition des en-têtes.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/post/readAllReported/";

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

      fetch(url, parametresDeRequete)
        .then((success) => {
          success.json().then((result) => {
            commit("SET_NEW_REPORTED_POST", result.posts);

            if (result.posts.length == 0) {
              console.log("Pas de poste à signaler");

              let info = document.getElementById("info");
              info.innerHTML = `Pas poste signalé pour l'instant 😃`;
            }

            this.posts = result.posts.map((post) => {
              post.formatedDate = FORMAT_DATE(post.createdAt);

              return post;
            });
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

    //* ✅ 👉 Afficher les commentaires signalé.
    SHOW_ALL_REPORTED_COMMENTS({ commit }) {
      const storageToken = localStorage.getItem("groupomania");
      const objJson = JSON.parse(storageToken);
      const token = objJson.token;

      let userId = this.state.userId;

      //* ✅ 👉 Définition des en-têtes.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/comment/readAllReported/";

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

      fetch(url, parametresDeRequete)
        .then((success) => {
          success.json().then((result) => {
            commit("SET_NEW_REPORTED_COMMENT", result.comments);

            if (result.comments.length == 0) {
              console.log("Pas de commentaire a signaler");

              let infoComment = document.getElementById("infoComment");
              infoComment.innerHTML = `Pas de commentaire signalé pour l'instant 😃`;
            }
            this.comments = result.comments.map((comment) => {
              comment.formatedDate = FORMAT_DATE(comment.createdAt);

              return comment;
            });
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

    //* ✅ 👉 Afficher les commentaires signalé.
    SHOW_SELECTED_POST({ commit }) {
      const storagePostId = localStorage.getItem("postId");
      const params = storagePostId;

      const storageToken = localStorage.getItem("groupomania");
      const objJson = JSON.parse(storageToken);
      const token = objJson.token;

      //* ✅ 👉 Définition des en-têtes.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);

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
            commit("SET_POST", result.posts);
            commit("SET_POST_DATE", FORMAT_DATE(result.posts.createdAt));
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

    //* ✅ 👉 Afficher les postes du fil d'actualité.
    SHOW_ALL_POSTS({ commit }) {
      const storageToken = localStorage.getItem("groupomania");
      const objJson = JSON.parse(storageToken);
      const token = objJson.token;

      //* ✅ 👉 Définition des en-têtes.
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);

      //* ✅ 👉 Définition de l'URL de la requête.
      let url = "http://localhost:3000/api/post/readAllPosts";

      //* ✅ 👉 Définition des paramètres de la requête.
      const parametresDeRequete = {
        method: "GET",
        headers: headers,
      };

      fetch(url, parametresDeRequete)
        .then((success) => {
          success.json().then((result) => {
            commit("SET_ALL_POST", result.posts);

            if (result.posts.length == 0) {
              console.log("Pas de poste à afficher");

              let home = document.getElementById("home");
              home.innerHTML = `Pas de poste à afficher 😃`;
            }

            this.posts = result.posts.map((post) => {
              post.formatedDate = FORMAT_DATE(post.createdAt);

              return post;
            });
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

    //* ✅ 👉 Afficher les commentaires.
    UPDATE_COMMENT_FEED({ commit }) {
      const storagePostId = localStorage.getItem("postId");
      const params = storagePostId;

      const storageToken = localStorage.getItem("groupomania");
      const objJson = JSON.parse(storageToken);
      const token = objJson.token;

      let userId = this.state.id;
      this.logged = userId;

      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);

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
            result.comments.forEach((item, index) => {
              commit("SET_NEW_COMMENT", result.comments);

              console.log(
                "%cComment Index",
                "color:orange ;  font-size: 15px",
                index
              );

              if (item.userId == userId) {
                console.log(
                  "Pour ce commentaire, signalement impossible || Modifications du post possible"
                );
              } else {
                console.log(
                  "Pour ce commentaire, signalement possible || Modifications du post impossible"
                );
              }
            });

            this.comments = result.comments.map((comment) => {
              comment.formatedDate = FORMAT_DATE(comment.createdAt);

              return comment;
            });
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

    SHOW_ALL_COMMENTS({ commit }) {
      const storagePostId = localStorage.getItem("postId");
      const params = storagePostId;

      const storageToken = localStorage.getItem("groupomania");
      const objJson = JSON.parse(storageToken);
      const token = objJson.token;

      let userId = this.state.id;
      this.logged = userId;

      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);

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
            commit("SET_ALL_COMMENTS", result.comments);

            this.comments = result.comments.map((comment) => {
              comment.formatedDate = FORMAT_DATE(comment.createdAt);

              return comment;
            });
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
  },

  modules: {},
  getters: {},
});
