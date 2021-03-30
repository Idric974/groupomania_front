import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedUser: "",
  },

  mutations: {
    LOGGED_USER_ID(state) {
      let userId;

      const storageToken = localStorage.getItem("groupomania");
      const objJson = JSON.parse(storageToken);
      const token = objJson.token;

      const params = token;
      console.log("Token de la mutation", params);

      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);

      let url = "http://localhost:3000/api/user/userId/" + params;

      const parametresDeRequete = {
        method: "GET",
        headers: headers,
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
            userId = data.data;
            console.log(userId);
            state.loggedUser = userId;
          });
        })

        .catch(function(err) {
          console.log("Fetch Error :-S", err);
        });
    },

    mounted() {
      this.LOGGED_USER_ID();
    },
  },
  actions: {},
  modules: {},
  getters: {},
});
