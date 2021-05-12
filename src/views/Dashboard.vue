<template>
  <v-container>
    <h3>Dashboard</h3>
  </v-container>
</template>

<script>
export default {
  name: "Dashboard",
  created() {
    if (!this.$store.state.stores.info.data) {
      this.$store.dispatch("stores/fetchStore", {
        id: process.env.VUE_APP_STORE_ID,
      });
    }
  },
};
</script>

<style scoped></style>
