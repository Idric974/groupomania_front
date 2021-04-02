import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
let aliasInfo;
let firstNameInfo;
let nameInfo;
let userIdInfo;
let adminInfo;

export default new Vuex.Store({
  state: {
    alias: "",
    firstName: "",
    name: "",
    userId: "",
    admin: "",
  },

  mutations: {
    LOGGED_USER(state) {
      state.name = nameInfo;
      state.firstName = firstNameInfo;
      state.alias = aliasInfo;
      state.userId = userIdInfo;
      state.admin = adminInfo;
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
            commit("LOGGED_USER");
            aliasInfo = result.users.alias;
            firstNameInfo = result.users.firstname;
            nameInfo = result.users.name;
            userIdInfo = result.users.id;
            adminInfo = result.users.admin;
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
