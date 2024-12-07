<template>
  <v-app>
    <v-main>
      <!-- Hero Section -->
      <v-container fluid class="pa-0">
        <v-img src="@/assets/hero-image.jpg" height="500px" class="white--text d-flex align-center justify-center">
          <div class="text-center hero-overlay">
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
        <v-row class="banner-images">
          <v-col
            v-for="(person, index) in inspirationalPeople"
            :key="index"
            cols="auto"
            class="d-flex align-center justify-center"
          >
            <div class="inspirational-person">
              <img :src="person.image" class="banner-image" />
              <div class="overlay">
                <h3>{{ person.name }}</h3>
                <p>{{ person.description }}</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
      
      <!-- Suffering Section -->
      <v-container fluid class="pa-0">
        <v-img
          src="@/assets/hero-experience-suffering.png"
          height="500px"
          class="white--text d-flex align-center justify-center hero-suffering"
        >
          <div class="hero-overlay">
            <h1 class="hero-title hover-text">True greatness is forged in the fires of adversity</h1>
            <blockquote class="subtitle-2 italic mb-4 hover-text">
              Heroism lies in the struggle, for without it, no man can claim the glory of transformation.
            </blockquote>
          </div>
        </v-img>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import dokkodoImage from '@/assets/dokkodo.webp';
import stoicismImage from '@/assets/stoicism.webp';
import buddhismImage from '@/assets/buddhism.webp';
import kobeImage from '@/assets/kobe.jpg';
import jordanImage from '@/assets/Michael-Jordan-and-Bad-Boys-Pistons.jpg';
import marcusImage from '@/assets/Marcus Aurelius.webp';
import musashiImage from '@/assets/Musashi.webp';
import gogginsImage from '@/assets/goggins.jpeg';

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
    name: 'David Goggins',
    description: 'A former Navy SEAL and ultra-endurance athlete, David Goggins is known for his incredible mental toughness and resilience, inspiring others to push beyond their limits and embrace discomfort for personal growth.',
    image: gogginsImage
  },
  {
    name: 'Michael Jordan',
    description: 'Regarded as one of the greatest basketball players of all time, known for his leadership and skill.',
    image: jordanImage,
  },
  {
    name: 'Kobe Bryant',
    description: 'An iconic basketball player known for his work ethic and competitive spirit.',
    image: kobeImage,
  },
  {
    name: 'Miyamoto Musashi',
    description: 'A legendary swordsman and philosopher, known for his unique double-bladed swordsmanship and profound insights on strategy and life.',
    image: musashiImage,
  },
  {
    name: 'Marcus Aurelius',
    description: 'Marcus Aurelius, a philosopher-king, exemplified Stoic virtue by mastering himself and guiding his subjects with wisdom and compassion, teaching that true strength lies in serving the greater good amidst life\'s adversities.',
    image: marcusImage,
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
  color: #8A0000; 
  transform: scale(1.05);
}

/* Inspirational Person Styling */
.inspirational-person {
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
  width: 300px; /* Adjust as needed */
}

.banner-image {
  width: 100%;
  height: 450px;
  object-fit: cover;
}

.inspirational-person .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.inspirational-person:hover .overlay {
  opacity: 1; /* Show the overlay on hover */
}

.overlay h3, .overlay p {
  text-align: center;
  margin: 0;
  color: white; /* Ensure text is readable */
}

.overlay h3 {
  font-size: 1.5rem; /* Adjust as needed */
  margin-bottom: 0.5rem; /* Space between title and paragraph */
}

.overlay p {
  font-size: 1rem; /* Adjust font size for description */
  line-height: 1.4; /* Improve readability */
}

/* Banner Section */
.banner-images {
  display: flex;
  justify-content: center;
  gap: 5px;
}

/* Hero Section Overlay */
.hero-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

.hero-title {
  margin: 0;
}

.subtitle-2 {
  margin: 0;
}
</style>
