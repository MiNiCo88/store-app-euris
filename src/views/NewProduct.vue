<template>
  <v-form v-model="valid">
    <v-container>
      <v-card
        width="100%"
        v-if="
          !$store.state.stores.info.pending &&
          !$store.state.stores.categories.pending
        "
      >
        <v-card-title class="headline">Add new product</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="title"
                :rules="titleRules"
                label="Product name *"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="price"
                :rules="priceRules"
                type="number"
                label="Price *"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <div class="d-flex align-center">
                <v-select
                  v-if="!newCategory"
                  v-model="category"
                  :items="$store.getters['stores/getCategories']"
                  :rules="[(v) => !!v || 'Category is required']"
                  label="Category *"
                  required
                ></v-select>
                <v-text-field
                  v-if="newCategory"
                  v-model="category"
                  :rules="categoryRules"
                  label="New category name *"
                  required
                ></v-text-field>
                <v-btn
                  v-if="!newCategory"
                  text
                  @click="
                    newCategory = true;
                    category = '';
                  "
                  ><v-icon>mdi-plus</v-icon></v-btn
                >
                <v-btn
                  v-if="newCategory"
                  text
                  @click="
                    newCategory = false;
                    category = '';
                  "
                  ><v-icon>mdi-delete</v-icon></v-btn
                >
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <v-select
                v-model="employee"
                :items="$store.state.stores.info.data.employees"
                :rules="[(v) => !!v || 'Employee is required']"
                label="Employee *"
                required
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="description"
                clearable
                counter
                clear-icon="mdi-close-circle"
                :rules="descriptionRules"
                label="Description *"
              ></v-textarea>
            </v-col>
            <v-card-actions>
              <v-btn :disabled="!valid" @click="onSubmit()">Submit</v-btn>
            </v-card-actions>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "NewProduct",
  data: () => ({
    valid: true,
    newCategory: false,
    title: "",
    price: "",
    category: "",
    employee: "",
    description: "",
    titleRules: [
      (v) => !!v || "Product name is required",
      (v) =>
        (v && v.length > 2) || "Product name must be at least 3 characters",
    ],
    categoryRules: [
      (v) => !!v || "Category name is required",
      (v) =>
        (v && v.length > 2) || "Category name must be at least 3 characters",
    ],
    descriptionRules: [
      (v) => !!v || "Description is required",
      (v) => (v && v.length > 2) || "Description must be at least 3 characters",
    ],
    priceRules: [
      (v) => !!v || "Price is required",

      (v) => (v && v > 0) || "Price must be a positive number",
    ],
  }),
  created() {
    if (!this.$store.state.stores.info.data) {
      this.$store.dispatch("stores/fetchStore", {
        id: process.env.VUE_APP_STORE_ID,
      });
    }
    this.$store.dispatch("stores/fetchCategories", {
      id: process.env.VUE_APP_STORE_ID,
    });
  },
  methods: {
    onSubmit() {
      if (this.$store.state.products.form.pending) {
        return;
      }
      const payload = {
        title: this.title,
        category: this.category,
        employee: this.employee,
        price: this.price,
        description: this.description,
      };

      this.$store
        .dispatch("products/addProduct", {
          storeId: process.env.VUE_APP_STORE_ID,
          payload,
        })
        .then((id) => {
          this.$router.push(`/product/${id}`);
        });
    },
  },
};
</script>

<style scoped></style>
