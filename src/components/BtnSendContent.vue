<template>
  <div class="btn-appli">
    <div class="font"><i class="fas fa-mail-bulk"></i></div>
    <div class="btn-title">
      <router-link to="/Createpost" aria-label="Createpost" a href="#"
        ><h2>Poster un contenu</h2></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "BtnSendContent",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped></style>
