<template>
  <v-dialog v-model="isOpen" max-width="290" persistent>
    <v-card>
      <v-card-title class="headline"> Delete confirmation </v-card-title>

      <v-card-text>Are you sure? </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="red" text @click="$emit('confirm')"> Confirm </v-btn>

        <v-btn text @click="$emit('cancel')"> Cancel </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ConfirmDialog",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped></style>
