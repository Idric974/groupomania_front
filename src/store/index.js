import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    alias: "",
    firstname: "",
    name: "",
    userId: "",
    admin: "",
    id: "",
    email: "",
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
  },

  modules: {},
  getters: {},
});
