<template>
  <div id="app">
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

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

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

<style lang="scss">
//*🔴👉 #app Style.
#app {
  width: 97%;
  margin-left: auto;
  margin-right: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

.bonjour {
  width: 98%;
  background-color: black;
  color: white;
  position: fixed;
  top: 0;
  border-radius: 0px 0px 10px 10px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5px;
  padding-bottom: 5px;
  align-items: center;

  @media screen and (min-width: 742px) and (max-width: 991px) {
    height: 40px;
    .bonjour-text {
      margin-top: 10px;
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 992px) {
  }
}

.id {
  margin-top: 5px;
  color: red;
  font-weight: bolder;
}

//*🔴👉 Button Style.

.home-btn {
  width: 300px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 742px) and (max-width: 991px) {
    width: 250px;
  }

  @media screen and (min-width: 992px) {
    width: 300px;
  }
}

.btn-appli {
  width: 250px;
  border-radius: 10px;
  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6),
    inset -2px -2px 5px #1e3d59;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
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

button {
  width: 240px;
  margin: 10px 10px 10px 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  border: solid #1e3d59 1px;
  background-color: #1e3d59;
  color: white;
  text-align: center;
  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6),
    inset -2px -2px 3px rgba(0, 0, 0, 0.6);
  cursor: pointer;
}

.small {
  width: 100px;
  letter-spacing: 2px;
}

.large {
  width: 260px;
  letter-spacing: 2px;
}

.color {
  background-color: red;
}

.color-green {
  background-color: green;
}

.font {
  margin-left: 20px;
}

.btn-title {
  margin-left: auto;
  margin-right: auto;
}

//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//*🔴👉 Link setting.
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
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//*🔴👉 Police setting.
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #1e3d59;
}

p {
  font-size: 1.1rem;
}
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//*🔴👉 Font Awesome setting.
.fas {
  font-size: 1.4rem;
  margin-left: 0px;
  margin-right: 5px;
  color: rgb(253, 45, 1);
}
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//*🔴👉 Form setting.
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
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//*🔴👉 Export setting.
.formated-date {
  padding-bottom: 10px;
  font-weight: bolder;
}
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//*🔴👉 Components title.
.menu_composant {
  margin-top: 10px;
  margin-bottom: 10px;
}
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//*🔴👉 Instruction text.
.instruction {
  width: 100%;
  font-size: 1.1rem;
  margin-top: 10px;
  margin-bottom: 10px;
}

.instruction-text {
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 1.3rem;
  font-weight: bolder;
}
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//*🔴👉 Testing div tool.
.test {
  width: 100%;
  height: 100px;
  background-color: orange;
}
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//*🔴 REST CSS

h1 {
  font-size: 1.5rem;
}

h2 {
  font-size: 1.3rem;
}

h3 {
  font-size: 1.2rem;
}

h4 {
  font-size: 1.2rem;
}

h5 {
  font-size: 1.1rem;
}

h6 {
  font-size: 1.1rem;
}

p {
  font-size: 1.1rem;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
html,
body,
div,
span,
applet,
object,
iframe,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-family: "Poppins", sans-serif;
}

//*🔴👉 Réinitialisation du rôle d'affichage HTML5 pour les navigateurs plus anciens */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
</style>
