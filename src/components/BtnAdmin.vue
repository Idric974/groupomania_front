<template>
  <div class="btn-appli" v-if="admin == 1">
    <div class="font">
      <i class="fas fa-users-cog"></i>
    </div>
    <div class="btn-title">
      <router-link to="/Reported"><h3>Administrateur</h3></router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "BtnLogout",

  computed: {
    ...mapState([
      "firstname",
      "name",
      "alias",
      "userId",
      "admin",
      "id",
      "email",
    ]),
  },
};
</script>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖

<style lang="scss" scoped></style>
