<template>
  <div class="btn-appli" v-if="state == 1">
    <div class="font">
      <i class="fas fa-users-cog"></i>
    </div>
    <div class="btn-title">
      <router-link to="/Reported"><h3>Administrateur</h3></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BtnLogout",
  data() {
    return {
      state: "",
    };
  },

  methods: {
    findAdmin() {
      let userId = this.$store.state.admin;
      console.log(userId);
      if (userId == true) {
        this.state = 1;
      }
    },
  },

  mounted() {
    this.findAdmin();
  },
};
</script>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

<style lang="scss" scoped></style>
