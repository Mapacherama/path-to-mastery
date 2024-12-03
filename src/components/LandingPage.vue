<template>
  <v-app>
    <v-main>
      <!-- Hero Section -->
      <v-container fluid class="pa-0">
        <v-img src="@/assets/hero-image.jpg" height="500px" class="white--text d-flex align-center justify-center">
          <div class="text-center">
            <h1 class="display-2 font-weight-bold mb-4">Path to Mastery</h1>
            <p class="subtitle-1 mb-4">
              Inspiring individuals to think differently, act boldly, and live authentically.
            </p>
            <v-btn color="primary" large @click="explore">Explore More</v-btn>
          </div>
        </v-img>
      </v-container>

      <!-- About Section -->
      <v-container class="py-10">
        <v-row align="center">
          <v-col cols="12" md="6">
            <h2>About Us</h2>
            <p>
              Path to Mastery is a platform designed to inspire individuals to think differently, act boldly, and live authentically. Rooted in the principles of Musashi’s Dokkōdō, Stoicism, Shintoism, and Buddhism, this project reflects a personal journey toward self-mastery and deliberate living.
            </p>
            <p>
              We blend philosophy, visual inspiration, and interactive tools to challenge societal norms and help others embark on their own paths of growth, discipline, and authenticity.
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <v-img src="@/assets/about.webp" height="300px" contain></v-img>
          </v-col>
        </v-row>
      </v-container>

      <!-- Philosophy Section -->
      <v-container class="py-10" id="philosophy">
        <h2 class="text-center mb-6">Our Philosophy</h2>
        <v-row>
          <v-col cols="12" md="4" v-for="(philosophy, index) in philosophies" :key="index">
            <v-card>
              <v-img :src="philosophy.image" height="200px"></v-img>
              <v-card-title>{{ philosophy.title }}</v-card-title>
              <v-card-text>{{ philosophy.description }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- Contact Section -->
      <v-container class="py-10" id="contact">
        <h2 class="text-center mb-6">Get in Touch</h2>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-card>
              <v-card-text>
                <v-form>
                  <v-text-field label="Name" required></v-text-field>
                  <v-text-field label="Email" required></v-text-field>
                  <v-textarea label="Message" required></v-textarea>
                  <v-btn color="primary" @click="sendMessage">Send Message</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const philosophies = ref([
  {
    title: 'Musashi’s Dokkōdō',
    description: 'Embrace the way of walking alone, focusing on self-reliance and inner strength.',
    image: '@/assets/dokkodo.webp',
  },
  {
    title: 'Stoicism',
    description: 'Cultivate resilience and virtue through mindful practices and rational thinking.',
    image: '@/assets/stoicism.webp',
  },
  {
    title: 'Buddhism',
    description: 'Seek enlightenment and inner peace through understanding and compassion.',
    image: '@/assets/buddhism.webp',
  },
]);

const explore = () => {
  const philosophySection = document.getElementById('philosophy');
  if (philosophySection) {
    philosophySection.scrollIntoView({ behavior: 'smooth' });
  }
};

const sendMessage = () => {
  console.log('Message sent');
};
</script>

<style scoped>
.v-img {
  position: relative;
  background-size: cover;
  background-position: center;
}

.v-img::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.v-img > div {
  position: relative;
  z-index: 1;
}

.text-center {
  text-align: center;
}

.mb-4 {
  margin-bottom: 1.5rem;
}

.mb-6 {
  margin-bottom: 2rem;
}

.py-10 {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}
</style>
