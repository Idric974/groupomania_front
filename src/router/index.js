import Vue from "vue";
import VueRouter from "vue-router";
import LoginComponent from "../views/Login.vue";
import HomeComponent from "../views/Home.vue";
import ProfilComponent from "../views/Profil.vue";
import SignupComponent from "../views/Signup.vue";
import CreatePostComponent from "../views/CreatePost.vue";
import ListCommentsComponent from "../views/ListComments.vue";
import UpDatePostComponent from "../views/UpDatePost.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
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
      path: "/CreatePost",
      name: "CreatePost",
      component: CreatePostComponent,
    },

    {
      path: "/ListComments/:id",
      name: "ListComments",
      component: ListCommentsComponent,
    },

    {
      path: "/UpDatePost",
      name: "UpDatePost",
      component: UpDatePostComponent,
    },
  ],
});
