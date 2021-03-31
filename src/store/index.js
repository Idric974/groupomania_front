import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
let userIdInfo = "";

export default new Vuex.Store({
  state: {
    loggedUser: "",
  },

  mutations: {
    UPDATE_USERID(state) {
      state.loggedUser = userIdInfo;
    },
  },
  actions: {
    async UPDATE_USERID({ commit }) {
      try {
        const storageToken = localStorage.getItem("groupomania");
        const objJson = JSON.parse(storageToken);
        const token = objJson.token;

        const params = token;

        const headers = new Headers();
        headers.append("Authorization", `Bearer ${token}`);

        let url = "http://localhost:3000/api/user/userId/" + params;

        const parametresDeRequete = {
          method: "GET",
          headers: headers,
        };

        await fetch(url, parametresDeRequete).then(function(response) {
          if (response.status !== 200) {
            console.log(
              "Looks like there was a problem. Status Code: " + response.status
            );
            return;
          }

          response.json().then(function(data) {
            commit("UPDATE_USERID");
            userIdInfo = data.data;

            console.log(
              "%c ⚠️ Logged User Id ⚠️ ===>>",
              "color:red ;  font-size: 15px",
              userIdInfo
            );
          });
        });
      } catch (e) {
        console.log(
          "%c ❌ CATCH ERROR ===>>",
          "color:orange ;  font-size: 15px",
          e
        );
      }
    },
  },

  modules: {},
  getters: {},
});
