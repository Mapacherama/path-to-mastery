<template>
  <v-toolbar class="elevation-8" color="grey-darken-3" dark>
    <!-- Logo Section -->
    <v-toolbar-title>
      <img
        src="@/assets/logo.png"
        alt="Path to Mastery Logo"
        style="height: 36px; margin-right: 16px;"
      />
      Path to Mastery
    </v-toolbar-title>

    <!-- Navigation Links -->
    <v-spacer></v-spacer>
    <v-btn text class="mx-2 white--text" href="#about">About</v-btn>
    <v-btn text class="mx-2 white--text" href="#journaling">journaling</v-btn>
    <v-btn text class="mx-2 white--text" href="#digitalSamurai">Digital Samurai</v-btn>
    <v-btn text class="mx-2 white--text" href="#routine">Routine</v-btn>
    <v-btn text class="mx-2 white--text" href="#destinations">Destinations</v-btn>
    <v-btn text class="mx-2 white--text" href="#philosophy">Philosophy</v-btn>
    <v-btn text class="mx-2 white--text" href="#inspirations">Inspirations</v-btn>

    <!-- Social Media Icons -->
    <v-icon class="mx-2 white--text">mdi-linkedin</v-icon>
      <v-icon class="mx-2 white--text">mdi-github</v-icon>
    <v-icon class="mx-2 white--text">mdi-instagram</v-icon>

    
  </v-toolbar>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Ref for drawer (if needed for additional functionality in the future)
const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
