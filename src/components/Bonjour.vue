<template>
  <div class="bonjour">
    <div>firstname = {{ firstname }}</div>
    <div>name = {{ name }}</div>
    <div>id = {{ id }}</div>
    <div>email = {{ email }}</div>
    <div>admin = {{ admin }}</div>
    <div>alias = {{ alias }}</div>
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

  methods: {},
};
</script>

<style></style>
