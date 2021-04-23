<template>
  <div class="btn-appli">
    <div class="font">
      <i class="fas fa-home"></i>
    </div>

    <div class="btn-title" @click="clearLocalStorage">
      <router-link to="/home" aria-label="home" a href="#"
        ><h2>Accueil</h2></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "BtnHome",

  methods: {
    clearLocalStorage() {
      localStorage.removeItem("postId");
    },
  },
};
</script>

<style lang="scss" scoped></style>
