<template>
  <v-card width="100%" class="pa-4 d-flex flex-column">
    <h3>{{ title }}</h3>
    <p>
      <strong class="primary--text">€{{ price }}</strong>
      - {{ category }}
    </p>
    <p>{{ description }}</p>
    <div class="mt-auto text-right">
      <v-btn fab x-small color="primary" :to="`/product/${id}`">
        <v-icon>mdi-eye</v-icon>
      </v-btn>
      <v-btn fab x-small color="error" class="ml-2" @click="$emit('delete')">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    id: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    price: {
      type: [String, Number],
      default: "",
    },
    category: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped></style>
