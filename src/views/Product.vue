<template>
  <v-container>
    <div class="mb-4">
      <v-btn fab x-small color="primary" to="/products">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </div>
    <div v-if="$store.state.products.form.pending" class="text-center">
      Loading Product...
    </div>
    <div v-else-if="!$store.state.products.form.error">
      <v-layout
        v-if="$store.state.products.form.item"
        column
        wrap
        justify-center
        align-center
      >
        <product-card-detail
          class="mb-4"
          @delete="showConfirmDialog = true"
        ></product-card-detail>
        <product-reviews></product-reviews>
        <confirm-dialog
          :is-open="showConfirmDialog"
          @confirm="onConfirmDelete()"
          @cancel="showConfirmDialog = false"
        ></confirm-dialog>
      </v-layout>
    </div>
    <div v-if="$store.state.products.form.error" class="text-center">
      {{ $store.state.products.form.error.message }}
    </div>
  </v-container>
</template>

<script>
import ProductCardDetail from "../components/ProductCardDetail";
import ProductReviews from "../components/ProductReviews";
import ConfirmDialog from "../components/ConfirmDialog";

export default {
  name: "Product",
  components: { ConfirmDialog, ProductReviews, ProductCardDetail },
  data: () => ({
    showConfirmDialog: false,
  }),
  created() {
    const productId = this.$route.params.id;
    if (productId) {
      this.$store.dispatch("products/fetchProduct", {
        storeId: process.env.VUE_APP_STORE_ID,
        id: productId,
      });
    }
  },
  methods: {
    onConfirmDelete() {
      this.$store
        .dispatch("products/deleteProduct", {
          storeId: process.env.VUE_APP_STORE_ID,
          id: this.$route.params.id,
        })
        .then(() => {
          this.showConfirmDialog = false;
          this.$router.push("/products");
        })
        .catch(() => {
          this.showConfirmDialog = false;
          // Handle Error
        });
    },
  },
};
</script>

<style scoped></style>
