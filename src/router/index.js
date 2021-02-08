import Vue from "vue";

import VueRouter from "vue-router";
import LoginComponent from "../views/login.vue";
import HomeComponent from "../views/home.vue";
import ProfilComponent from "../views/Profil.vue";
import SignupComponent from "../views/Signup.vue";
import EditprofilComponent from "../views/Editprofil.vue";
import CreatepostComponent from "../views/Createpost.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: {
        name: "login",
      },
    },
    {
      path: "/login",
      name: "login",
      component: LoginComponent,
    },

    {
      path: "/home",
      name: "home",
      component: HomeComponent,
    },
    {
      path: "/profil",
      name: "profil",
      component: ProfilComponent,
    },

    {
      path: "/Signup",
      name: "Signup",
      component: SignupComponent,
    },

    {
      path: "/Editprofil",
      name: "Editprofil",
      component: EditprofilComponent,
    },

    {
      path: "/Createpost",
      name: "Createpost",
      component: CreatepostComponent,
    },
  ],
});
