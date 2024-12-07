<template>
  <v-app>
    <v-main>
      <!-- Hero Section -->
      <v-container fluid class="pa-0">
        <v-img src="@/assets/hero-image.jpg" height="500px" class="white--text d-flex align-center justify-center">
          <div class="text-center">
            <h1 class="display-2 font-weight-bold mb-4 hover-text">Path to Mastery</h1>
            <p class="subtitle-1 mb-4 hover-text">
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
              <v-img :src="philosophy.image" height="200px" contain></v-img>
              <v-card-title>{{ philosophy.title }}</v-card-title>
              <v-card-text>{{ philosophy.description }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- People Who Inspire Me Section -->
      <v-container class="py-10" id="inspirational-people">
        <h2 class="text-center mb-6">People Who Inspire Me</h2>
        <v-row>
          <v-col cols="12" md="4" v-for="(person, index) in inspirationalPeople" :key="index">
            <v-card>
              <v-img :src="person.image" height="200px" contain></v-img>
              <v-card-title>{{ person.name }}</v-card-title>
              <v-card-text>{{ person.description }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import dokkodoImage from '@/assets/dokkodo.webp';
import stoicismImage from '@/assets/stoicism.webp';
import buddhismImage from '@/assets/buddhism.webp';
import romeImage from '@/assets/rome.jpg';
import hawaiiImage from '@/assets/hawaii.jpg';
import thailandImage from '@/assets/thailand.jpg';
import kobeImage from '@/assets/kobe.jpg';
import jordanImage from '@/assets/jordan.jpg';
import muskImage from '@/assets/musk.jpg';

const philosophies = ref([
  {
    title: 'Musashi’s Dokkōdō',
    description: 'Embrace the way of walking alone, focusing on self-reliance and inner strength.',
    image: dokkodoImage,
  },
  {
    title: 'Stoicism',
    description: 'Cultivate resilience and virtue through mindful practices and rational thinking.',
    image: stoicismImage,
  },
  {
    title: 'Buddhism',
    description: 'Seek enlightenment and inner peace through understanding and compassion.',
    image: buddhismImage,
  },
]);

const inspirationalPeople = ref([
  {
    name: 'Kobe Bryant',
    description: 'An iconic basketball player known for his work ethic and competitive spirit.',
    image: kobeImage,
  },
  {
    name: 'Michael Jordan',
    description: 'Regarded as one of the greatest basketball players of all time, known for his leadership and skill.',
    image: jordanImage,
  },
  {
    name: 'Elon Musk',
    description: 'A visionary entrepreneur known for his work with Tesla and SpaceX, pushing the boundaries of technology.',
    image: muskImage,
  },
]);

const explore = () => {
  const philosophySection = document.getElementById('philosophy');
  if (philosophySection) {
    philosophySection.scrollIntoView({ behavior: 'smooth' });
  }
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

.hover-text {
  transition: color 0.3s ease, transform 0.3s ease;
}

.hover-text:hover {
  color: #ff4081;
  transform: scale(1.05);
}
</style>
