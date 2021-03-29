import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedUser: "",
  },

  mutations: {
    LOGGED_USER_ID(state) {
      console.log(state);

      const userIdStorage = localStorage.getItem("groupomania");
      const objJson = JSON.parse(userIdStorage);
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
            console.log(
              "%c ✔️ Logged id user ===>>",
              "color:green ;  font-size: 15px ",
              data.data
            );
          });
        })

        .catch(function(err) {
          console.log("Fetch Error :-S", err);
        });
    },

    mounted() {
      this.loggedInUser();
    },
  },
  actions: {},
  modules: {},
  getters: {},
});
