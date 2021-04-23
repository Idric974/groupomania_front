<template>
  <div class="btn-appli">
    <div class="font"><i class="fas fa-sign-out-alt"></i></div>

    <div class="btn-title" @click="clearLocalStorage">
      <router-link to="/" aria-label="Déconnection" a href="#"
        ><h2>Déconnection</h2></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "BtnLogout",

  methods: {
    clearLocalStorage() {
      localStorage.removeItem("groupomania");
      localStorage.removeItem("postId");

      console.log("%c ❌ logged out user", "color:green ;  font-size: 15px");
    },
  },
};
</script>

<style lang="scss" scoped></style>
