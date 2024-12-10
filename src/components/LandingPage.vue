<template>
  <v-app>
    <v-main>
      <!-- Hero Section -->
      <v-container fluid class="pa-0">
        <v-img
          src="@/assets/hero-image.jpg"
          height="500px"
          class="white--text d-flex align-center justify-center"
        >
          <div class="text-center hero-overlay">
            <h1 class="display-2 font-weight-bold mb-4 hover-text">
              Path to Mastery
            </h1>
            <p class="subtitle-1 mb-4 hover-text">
              Inspiring individuals to think differently, act boldly, and live
              authentically.
            </p>
            <v-btn class="btn" large @click="explore">Explore More</v-btn>
          </div>
        </v-img>
      </v-container>

      <!-- About Section -->
      <v-container class="py-10">
        <v-row align="center">
          <v-col cols="12" md="6">
            <h2>About Us</h2>
            <div class="text-container">
              <p>
                Path to Mastery is more than a platform—it’s a call to think
                boldly, live authentically, and embrace growth. Rooted in
                timeless philosophies like Musashi’s Dokkōdō and Stoicism, it
                reflects a journey of self-mastery and purposeful living.
              </p>
              <p>
                Forged through challenges like running a marathon alone while
                fasting, this project is fueled by discipline, resilience, and
                the belief that greatness lies in the refusal to quit.
              </p>
              <p>
                We combine philosophy, visual storytelling, and tools for
                transformation to help others break free from norms and carve
                their own paths to mastery.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <v-img
              src="@/assets/about.webp"
              height="300px"
              contain
              class="about-image"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>

      <!-- Philosophy Section -->
      <v-container class="py-10" id="philosophy">
        <h2 class="text-center mb-6">Our Philosophy</h2>
        <v-row>
          <v-col
            cols="12"
            md="4"
            v-for="(philosophy, index) in philosophies"
            :key="index"
          >
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

      <!-- Digital Samurai Section -->
      <v-container fluid class="py-10">
        <v-img
          src="@/assets/Digital-Samurai.webp"
          height="600px"
          class="white--text d-flex align-center justify-center digital-samurai-section"
        >
          <!-- Dark Overlay -->
          <!-- <div class="image-overlay"></div> -->

          <div class="hero-overlay">
            <!-- Title -->
            <h1 class="hero-title hover-text">The Path of Digital Strategy</h1>

            <!-- Quote -->
            <blockquote class="subtitle-2 italic mb-4 hover-text">
              "Mastery is not just about the blade, but about the spirit and the
              mind navigating the digital dojo."
            </blockquote>

            <!-- Button -->
            <v-btn class="btn-purple" large> Enter the Digital Dojo </v-btn>
          </div>
        </v-img>
      </v-container>

      <!-- Suffering Section -->
      <v-container fluid class="pa-0">
        <v-img
          src="@/assets/hero-experience-suffering.png"
          height="500px"
          class="white--text d-flex align-center justify-center hero-suffering"
        >
          <div class="hero-overlay">
            <h1 class="hero-title hover-text">
              True greatness is forged in the fires of adversity
            </h1>
            <blockquote class="subtitle-2 italic mb-4 hover-text">
              Heroism lies in the struggle, for without it, no man can claim the
              glory of transformation.
            </blockquote>
            <v-btn class="btn mt-4" large>
              Step into your transformation.
            </v-btn>
          </div>
        </v-img>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import dokkodoImage from "@/assets/dokkodo.webp";
import stoicismImage from "@/assets/stoicism.webp";
import buddhismImage from "@/assets/buddhism.webp";
import kobeImage from "@/assets/kobe.jpg";
import jordanImage from "@/assets/Michael-Jordan-and-Bad-Boys-Pistons.jpg";
import marcusImage from "@/assets/Marcus Aurelius.webp";
import musashiImage from "@/assets/Musashi.webp";
import gogginsImage from "@/assets/goggins.jpeg";

const philosophies = ref([
  {
    title: "Musashi’s Dokkōdō",
    description:
      "Embrace the way of walking alone, focusing on self-reliance and inner strength.",
    image: dokkodoImage,
  },
  {
    title: "Stoicism",
    description:
      "Cultivate resilience and virtue through mindful practices and rational thinking.",
    image: stoicismImage,
  },
  {
    title: "Buddhism",
    description:
      "Seek enlightenment and inner peace through understanding and compassion.",
    image: buddhismImage,
  },
]);

const inspirationalPeople = ref([
  {
    name: "David Goggins",
    description:
      "A former Navy SEAL and ultra-endurance athlete, David Goggins is known for his incredible mental toughness and resilience, inspiring others to push beyond their limits and embrace discomfort for personal growth.",
    image: gogginsImage,
  },
  {
    name: "Michael Jordan",
    description:
      "Regarded as one of the greatest basketball players of all time, known for his leadership and skill.",
    image: jordanImage,
  },
  {
    name: "Kobe Bryant",
    description:
      "An iconic basketball player known for his work ethic and competitive spirit.",
    image: kobeImage,
  },
  {
    name: "Miyamoto Musashi",
    description:
      "A legendary swordsman and philosopher, known for his unique double-bladed swordsmanship and profound insights on strategy and life.",
    image: musashiImage,
  },
  {
    name: "Marcus Aurelius",
    description:
      "Marcus Aurelius, a philosopher-king, exemplified Stoic virtue by mastering himself and guiding his subjects with wisdom and compassion, teaching that true strength lies in serving the greater good amidst life's adversities.",
    image: marcusImage,
  },
]);

const explore = () => {
  const philosophySection = document.getElementById("philosophy");
  if (philosophySection) {
    philosophySection.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped>
/* General Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* General Styling */
h2 {
  animation: fadeIn 1s ease-in-out;
}

p {
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
}

.text-container {
  max-width: 700px;
  margin: 0 auto;
  text-align: left;
}

.v-img {
  position: relative;
  background-size: cover;
  background-position: center;
}

.v-img::before {
  content: "";
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
  color: #8a0000;
  transform: scale(1.05);
}

/* Hero Section */
.hero-title {
  font-family: "Helvetica Neue", sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  z-index: 2;
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
  animation-delay: 0.3s;
}

.subtitle-2 {
  font-family: "Helvetica Neue", sans-serif;
  font-size: 1.2rem;
  font-style: italic;
  color: #ccc;
  text-align: center;
  line-height: 1.6;
  margin-bottom: 2rem;
  z-index: 2;
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
  animation-delay: 0.6s;
}

.hero-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
}

/* Digital Samurai Section */
.digital-samurai-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

/* About Section */
.about-image {
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}

/* Inspirational Person Section */
.inspirational-person {
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
  width: 300px;
}

.image-caption {
  font-family: "Helvetica Neue", sans-serif;
  font-size: 0.9rem;
  color: #bbb;
  text-align: center;
  margin-top: 0.5rem;
}

.inspirational-person .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.inspirational-person:hover .overlay {
  opacity: 1;
}

.overlay h3,
.overlay p {
  text-align: center;
  margin: 0;
  color: white;
}

.overlay h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.overlay p {
  font-size: 1rem;
  line-height: 1.4;
}

/* Banner Section Styling */
.banner-images {
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Ensures images stack neatly if they overflow */
  gap: 20px; /* Space between images */
  margin: 0 auto;
  max-width: 1200px; /* Limit the width of the section */
}

.inspirational-person {
  position: relative;
  width: 300px; /* Fixed width for all images */
  height: 450px; /* Fixed height for all images */
  overflow: hidden;
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); /* Add shadow for depth */
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures images maintain aspect ratio and fill space */
}

.inspirational-person .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.inspirational-person:hover .overlay {
  opacity: 1; /* Overlay appears on hover */
}
</style>
