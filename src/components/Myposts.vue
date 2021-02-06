<template>
  <div class="Myposts">
    <h1>Posts</h1>
    <p>Un des postes du salarié</p>
  </div>
</template>

<script>
export default {
  name: "Myposts",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.Myposts {
  width: 100%;
  height: 200px;
  box-shadow: black 0px 0px 5px 0px;
  border-radius: 10px;
}
</style>
