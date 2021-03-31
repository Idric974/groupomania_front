import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedUser: "",
  },

  mutations: {
    LOGGED_USER_ID(state) {
      console.log(
        "%c ⚠️ Le state ⚠️ ===>> ",
        "color:red ;  font-size: 15px",
        state
      );

      let userId;

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
            state.loggedUser = userId;

            console.log(
              "%c ⚠️ Logged User Id ⚠️ ===>>",
              "color:red ;  font-size: 15px",
              userId
            );
          });
        })

        .catch(function(err) {
          console.log("Fetch Error :-S", err);
        });
    },
  },
  actions: {
    LOGGED_USER_ID(context) {
      context.commit("LOGGED_USER_ID");
    },
  },
  modules: {},
  getters: {},
});
