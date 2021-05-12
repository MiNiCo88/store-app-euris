<template>
  <v-card max-width="500" width="100%" class="pa-4 d-flex flex-column">
    <h3 class="mb-4">Reviews</h3>
    <div v-if="$store.state.products.form.item.reviews.length">
      <p
        v-for="(review, index) in $store.state.products.form.item.reviews"
        :key="`review-${index}`"
      >
        <v-icon class="mr-2">mdi-message-text</v-icon>
        {{ review }}
      </p>
    </div>
    <div v-else>
      <p><v-icon class="mr-2">mdi-message-alert</v-icon>No reviews yet</p>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "ProductReviews",
};
</script>

<style scoped></style>
