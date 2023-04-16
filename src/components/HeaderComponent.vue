<template>
  <v-app-bar app color="primary" >
    <v-btn icon @click="drawer = !drawer">
      <v-img :src="require('@/assets/img/HamburgerIcon.svg')" max-height="24" max-width="24"></v-img>
    </v-btn>
    <v-toolbar-title class="header-title">
      <h1 class="text-h4 nav-title">NWA Coder Bytes</h1>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
  watch: {
    drawer(val) {
      this.$emit("update:drawer", val);
    },
  },
};
</script>

<style scoped>
.header-title {
  width: 100%;
  display: flex;
  justify-content: center;
  color: #FF35D3;
  margin-right: 2rem;
}

.nav-title {
  font-family: "BAUHS93", sans-serif !important;
}
</style>
