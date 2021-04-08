<template>
  <div class="bonjour">
    <div class="bonjour-text">Bonjour {{ firstname }} {{ name }}</div>
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
