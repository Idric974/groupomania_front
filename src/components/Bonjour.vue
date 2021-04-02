<template>
  <div class="bonjour">
    <div>First Name ==> {{ firstName }}</div>
    <div>Name ==> {{ name }}</div>
    <div>Alias ==> {{ alias }}</div>
    <div>Id ==> {{ userId }}</div>
    <div>Admin ==> {{ admin }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "BtnLogout",

  computed: {
    ...mapState(["firstName", "name", "alias", "userId", "admin"]),
  },

  methods: {},
};
</script>

<style></style>
