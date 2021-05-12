<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <template v-if="$store.state.stores.info.data">
          {{ $store.state.stores.info.data.name }} -
          {{ $store.state.stores.info.data.category }}
        </template>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <loading-bar :is-loading="showLoader"></loading-bar>
  </v-app>
</template>

<script>
import LoadingBar from "./components/LoadingBar";
export default {
  components: { LoadingBar },
  data: () => ({
    drawer: null,
    items: [
      {
        title: "Dashboard",
        icon: "mdi-view-dashboard",
        route: { name: "Dashboard" },
      },
      { title: "Products", icon: "mdi-image", route: { name: "Products" } },
      { title: "New", icon: "mdi-plus", route: { name: "NewProduct" } },
    ],
  }),
  computed: {
    showLoader() {
      return (
        this.$store.state.products.items.pending ||
        this.$store.state.products.form.pending ||
        this.$store.state.products.actions.deleting
      );
    },
  },
};
</script>
