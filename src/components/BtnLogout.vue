<template>
  <div class="btn-appli">
    <div class="font"><i class="fas fa-sign-out-alt"></i></div>

    <div class="btn-title" @click="clearLocalStorage">
      <router-link to="/"><h3>Déconnection</h3></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BtnLogout",

  methods: {
    clearLocalStorage() {
      localStorage.removeItem("groupomania");
    },
  },
};
</script>

<style lang="scss" scoped></style>
