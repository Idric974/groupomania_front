<template>
  <div id="app">
    <div id="nav">
      <router-link
        v-if="authenticated"
        to="/login"
        v-on:click.native="logout()"
        replace
        ><p class="btn_logout">
          Déconnexion
        </p>
        <p></p
      ></router-link>
    </div>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "nraboy",
        password: "aaaa",
      },
    };
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    },
  },
};
</script>

<style>
.btn_logout {
  display: flex;
  justify-content: center;
  border: green solid 1px;
  box-shadow: green 0px 0px 5px 0px;
  border-radius: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
}
#app {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  font-weight: bold;
  color: black;
}

.router-link-exact-active {
  color: #2c3e50;
}

a:link {
  text-decoration: none;
}

p {
  font-size: 1.1rem;
}

.btn {
  width: 250px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 0;
  line-height: 2.5;
  padding: 0 20px;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  border-radius: 10px;
  background-color: rgb(6, 153, 6);
  background-image: linear-gradient(
    to top left,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2) 30%,
    rgba(0, 0, 0, 0)
  );
  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6),
    inset -2px -2px 3px rgba(0, 0, 0, 0.6);

  @media screen and (min-width: 742px) and (max-width: 991px) {
    width: 200px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 991px) {
    width: 250px;
    margin-top: 10px;
    margin-right: 10px;
    margin-left: auto;
    margin-right: auto;
  }
}

.btn2 {
  width: 250px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 0;
  line-height: 2.5;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  font-weight: bolder;
  border-radius: 10px;

  background-image: linear-gradient(
    to top left,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2) 30%,
    rgba(0, 0, 0, 0)
  );
  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6),
    inset -2px -2px 3px rgba(0, 0, 0, 0.6);

  @media screen and (min-width: 742px) and (max-width: 991px) {
    width: 200px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 991px) {
    width: 250px;
    margin-top: 10px;
    margin-right: 10px;
    margin-left: auto;
    margin-right: auto;
  }
}

.authentification {
  font-size: 1.5rem;
}

.menu_composant {
  display: flex;
  align-items: center;
}

.fas {
  font-size: 1.4rem;
  margin-left: 10px;
  margin-right: 20px;
}

input {
  margin: 10px 10px 10px 10px;
  text-align: center;
  font-size: 1.1rem;
  border: solid black 1px;
  border-radius: 10px;
  padding: 5px 5px 5px 5px;
}
</style>
