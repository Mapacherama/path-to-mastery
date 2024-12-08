<template>
  <v-toolbar class="elevation-8" color="grey-darken-3" dark>
    <!-- Logo Section -->
    <v-toolbar-title>
      <div class="logo-title-wrapper">
        <img
          src="@/assets/logo.png"
          alt="Path to Mastery Logo"
          class="logo-icon"
        />
        <div class="header-title">Path to Mastery</div>
      </div>
    </v-toolbar-title>

    <!-- Navigation Links -->
    <v-spacer></v-spacer>
    <v-btn text class="mx-2 btn-black" href="#about">About</v-btn>
    <v-btn text class="mx-2 btn-black" href="#journaling">Journaling</v-btn>
    <v-btn text class="mx-2 btn-black" href="#digitalSamurai"
      >Digital Samurai</v-btn
    >
    <v-btn text class="mx-2 btn-black" href="#routine">Routine</v-btn>
    <v-btn text class="mx-2 btn-black" href="#destinations">Destinations</v-btn>
    <v-btn text class="mx-2 btn-black" href="#philosophy">Philosophy</v-btn>
    <v-btn text class="mx-2 btn-black" href="#inspirations">Inspirations</v-btn>

    <!-- Social Media Icons -->
    <v-icon class="mx-2 social-icon">mdi-linkedin</v-icon>
    <v-icon class="mx-2 social-icon">mdi-github</v-icon>
    <v-icon class="mx-2 social-icon">mdi-instagram</v-icon>
  </v-toolbar>
</template>

<script setup lang="ts">
import { ref } from "vue";

const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};
</script>

<style scoped>
.logo-title-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-icon {
  height: 36px;
}
.header-title {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  transition: color 0.3s ease-in-out;
}

.header-title:hover {
  color: #8a0000;
}

.header-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 0;
  height: 2px;
  background-color: #8a0000;
  transition: width 0.3s ease-in-out;
}

.header-title:hover::after {
  width: 100%;
}
</style>
