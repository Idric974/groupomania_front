<template>
  <div id="app">
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
  mounted() {},
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

<style lang="scss">
button {
  border: none;
  background: transparent;
  cursor: pointer;
}

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

h1,
h2,
h3,
h4 {
  color: #1e3d59;
}

p {
  font-size: 1.1rem;
}

.authentification {
  font-size: 1.5rem;
}

.menu_composant {
  display: flex;
  align-items: center;
  justify-content: center;
}

.fas {
  font-size: 1.4rem;
  margin-left: 0px;
  margin-right: 5px;
  color: rgb(253, 45, 1);
}

input {
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: center;
  font-size: 1.1rem;
  border: none;
  border-radius: 10px;
  padding: 10px 0px 10px 0px;
  width: 95%;
  background-color: white;
}

.btnAppli {
  border-radius: 10px;
  box-shadow: #1e3d59 0px 5px 5px 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 742px) and (max-width: 991px) {
    width: 100%;
    padding-left: 5px;
    padding-right: 5px;
  }

  @media screen and (min-width: 992px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
}

.btn_acc {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 742px) and (max-width: 991px) {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  @media screen and (min-width: 992px) {
    display: flex;
    flex-direction: row;
  }
}

.btn_acc2 {
  width: 400px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 742px) and (max-width: 991px) {
    width: 300px;
  }

  @media screen and (min-width: 992px) {
    width: 300px;
  }
}

.test {
  width: 100%;
  height: 100px;
  background-color: orange;
}

.formatedDate {
  padding-bottom: 10px;
  font-weight: bolder;
}

button {
  width: 240px;
  margin: 10px 15px 10px 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  border: solid #1e3d59 1px;
  background-color: #1e3d59;
  color: white;
  text-align: center;
  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6),
    inset -2px -2px 3px rgba(0, 0, 0, 0.6);
}

.small {
  width: 115px;
  letter-spacing: 2px;
}

.large {
  width: 260px;
  letter-spacing: 2px;
}
</style>
