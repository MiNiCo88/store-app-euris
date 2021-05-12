<template>
  <v-card max-width="500" width="100%" class="pa-4 d-flex flex-column">
    <h3>{{ product.title }}</h3>
    <p>
      <strong class="primary--text">€{{ product.price }}</strong>
      - {{ product.category }}
    </p>
    <p>{{ product.description }}</p>
    <p class="grey--text">Employee: {{ product.employee }}</p>
    <div class="mt-auto text-right">
      <v-btn fab x-small color="error" class="ml-2" @click="$emit('delete')">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "ProductCardDetail",

  computed: {
    product() {
      return this.$store.state.products.form.item;
    },
  },
};
</script>

<style scoped></style>
