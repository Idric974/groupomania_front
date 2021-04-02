<template>
  <div class="bonjour">
    <div>Bonjour {{ firstName }} {{ name }}</div>
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
