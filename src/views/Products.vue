<template>
  <v-container>
    <div v-if="$store.state.products.items.pending">Loading Products...</div>
    <div v-else>
      <v-container
        v-if="$store.state.products.items.data.length"
        fluid
        grid-list-md
      >
        <div class="text-right mb-4">
          <v-btn-toggle
            color="primary"
            mandatory
            :value="$store.state.products.items.displayGrid"
            @change="onToggleChange"
          >
            <v-btn>
              <v-icon>mdi-view-sequential</v-icon>
            </v-btn>
            <v-btn>
              <v-icon>mdi-view-module</v-icon>
            </v-btn>
          </v-btn-toggle>
        </div>
        <v-layout row wrap>
          <v-flex
            v-for="product in $store.state.products.items.data"
            :key="product.id"
            d-flex
            xs12
            :sm6="$store.state.products.items.displayGrid"
            :md4="$store.state.products.items.displayGrid"
          >
            <product-card
              :title="product.data.title"
              :price="product.data.price"
              :description="product.data.description"
              :category="product.data.category"
              :id="product.id"
            ></product-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </v-container>
</template>

<script>
import ProductCard from "../components/ProductCard";
export default {
  name: "Products",
  components: { ProductCard },
  // data: () => ({
  //   data: [
  //     {
  //       id: "5Mc1vTuPn1op5ItBqcR2",
  //       data: {
  //         title: "Zuzzurelloni alla crema",
  //         category: "Biscotti",
  //         description: "Biscotti alla crema",
  //         employee: "Marco",
  //         price: 2,
  //         id: "",
  //         reviews: [],
  //       },
  //     },
  //     {
  //       id: "9uvgk0uv9jxRv2soBica",
  //       data: {
  //         description: "Torta al cioccolato",
  //         category: "Torte",
  //         title: "Saker",
  //         employee: "Marco",
  //         price: "22",
  //       },
  //     },
  //     {
  //       id: "BAU9ay4Tze7jTIrRgvSN",
  //       data: {
  //         reviews: [
  //           "Molto buoni.",
  //           "Sono buonissimi.",
  //           "Ne ho fatto indigestione",
  //         ],
  //         category: "biscotti",
  //         employee: "Aldo",
  //         price: 3.5,
  //         description: "Biscotti alla menta fatti in casa.",
  //         title: "Biscotti alla menta",
  //       },
  //     },
  //     {
  //       id: "DNe8CB47SlfmZzoL7tud",
  //       data: {
  //         description: "Torta con le mele fresca",
  //         price: "9",
  //         employee: "Aldo",
  //         title: "Torta alle mele",
  //         category: "Torte",
  //       },
  //     },
  //     {
  //       id: "Kkm0FG1oL5JXp3aFrit6",
  //       data: {
  //         description: "Bigne al limoncello",
  //         id: "",
  //         category: "Torte",
  //         reviews: [],
  //         price: 5,
  //         employee: "Asia",
  //         title: "Bom bom yellow",
  //       },
  //     },
  //     {
  //       id: "Uu1U3aPqQIHNycDmx5jY",
  //       data: {
  //         category: "biscotti",
  //         description: "Biscotti ai mirtilli e vaniglia",
  //         title: "Mirtillini",
  //         reviews: [],
  //         employee: "Asia",
  //         id: "",
  //         price: 3,
  //       },
  //     },
  //     {
  //       id: "ZHB5DiC5mFn8D6Ps3itN",
  //       data: {
  //         reviews: [],
  //         price: 20,
  //         description: "Mandorle ricoperte ",
  //         id: "",
  //         category: "Confetti",
  //         employee: "Marco",
  //         title: "Gemme",
  //       },
  //     },
  //     {
  //       id: "cM4y0n7qxkMTI4Uq2WL7",
  //       data: {
  //         title: "Test Product",
  //         employee: "Aldo",
  //         description: "Test description",
  //         category: "Biscotti",
  //         price: 100,
  //       },
  //     },
  //     {
  //       id: "geWc4c06zVuEn4fk4hSb",
  //       data: {
  //         description:
  //           "Il dolce è costituito da una pasta biscotto arrotolata, bagnata con Alchermes, e farcito con crema pasticcera e crema al cioccolato.",
  //         price: "20",
  //         title: "Gattò all’aretina",
  //         category: "Torte",
  //         employee: "Marco",
  //       },
  //     },
  //     {
  //       id: "h7hunS3hE6H4EMO6Fxvz",
  //       data: {
  //         id: "",
  //         title: "Mega torta ciccolatosa",
  //         description: "Torta da sbaffare in un morso",
  //         employee: "Marco",
  //         category: "Super torta",
  //         reviews: [],
  //         price: 30,
  //       },
  //     },
  //     {
  //       id: "kk4SebjKKBK6InivPnek",
  //       data: {
  //         employee: "Asia",
  //         id: "",
  //         category: "Gelati",
  //         title: "Golosone",
  //         price: 1,
  //         description: "Ghiacciolo alla panna",
  //         reviews: [],
  //       },
  //     },
  //     {
  //       id: "vmGJvDNn6YdRIB27mtGO",
  //       data: {
  //         title: "Frutta e verdura",
  //         reviews: [],
  //         price: 0.5,
  //         category: "Gelati",
  //         employee: "Asia",
  //         id: "",
  //         description: "Ghiacciolo alla frutta con verdura",
  //       },
  //     },
  //   ],
  // }),
  created() {
    this.$store.dispatch(
      "products/fetchProducts",
      process.env.VUE_APP_STORE_ID
    );
  },
  methods: {
    onToggleChange($event) {
      this.$store.dispatch("products/setDisplay", $event);
    },
  },
};
</script>

<style scoped></style>
