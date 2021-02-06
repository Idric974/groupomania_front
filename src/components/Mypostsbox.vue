<template>
  <div class="Mypostsbox">
    <h1>Box mes posts</h1>
    <p>Boîte où apparaissent tous les postes du salarié.</p>
    <Myposts />
  </div>
</template>

<script>
import Myposts from "./Myposts.vue";
export default {
  components: { Myposts },
  name: "Mypostsbox",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.Mypostsbox {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: black 0px 0px 5px 0px;
  border-radius: 10px;
}
</style>
