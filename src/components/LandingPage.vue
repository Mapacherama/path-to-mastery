<template>
  <v-app>
    <v-container class="text-center py-10">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card>
            <v-card-title class="headline">Path to Mastery</v-card-title>
            <v-card-text>
              <p>
                Path to Mastery is a platform designed to inspire individuals to think differently, act boldly, and live authentically. Rooted in the principles of Musashi’s Dokkōdō (The Way of Walking Alone), Stoicism, Shintoism, and Buddhism, this project is a digital reflection of a personal journey toward self-mastery and deliberate living.
              </p>
              <p>
                This platform blends philosophy, visual inspiration, and interactive tools to challenge societal norms and help others embark on their own paths of growth, discipline, and authenticity.
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="explore">Explore More</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';

const explore = () => {
  // Define the action for the "Explore More" button
  // For example, navigate to another route or open a dialog
  console.log("Explore More button clicked");
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
