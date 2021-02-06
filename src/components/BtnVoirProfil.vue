<template>
  <div class="BtnVoirProfil">
    <router-link to="/Profil">
      <h3><i class="fas fa-user-edit"></i> Voir mon Profil</h3></router-link
    >
  </div>
</template>

<script>
export default {
  name: "BtnVoirProfil",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
.BtnVoirProfil {
  border: solid black 1px;
  border-radius: 10px;
  box-shadow: black 0px 0px 5px 0px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  a:link {
    text-decoration: none;
  }
}
</style>
