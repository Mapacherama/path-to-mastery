<template>
  <div class="about-page">
    <!-- Main Content -->
    <v-container class="mt-5">
      <v-row>
        <v-col cols="12">
          <h1 class="title">About Path to Mastery</h1>
          <p class="description">
            Welcome to Path to Mastery, your ultimate destination for achieving
            excellence in every aspect of life. Our journey is guided by
            timeless principles and modern strategies to help you unlock your
            full potential.
          </p>
        </v-col>
      </v-row>

      <!-- Mission Section -->
      <v-row id="mission" class="mt-10">
        <v-col cols="12" md="6">
          <h2 class="section-title">Our Mission</h2>
          <p>
            To inspire and empower individuals to pursue mastery through
            discipline, learning, and resilience.
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <v-img
            src="https://via.placeholder.com/600x400"
            alt="Mission Image"
          ></v-img>
        </v-col>
      </v-row>

      <!-- Vision Section -->
      <v-row id="vision" class="mt-10">
        <v-col cols="12" md="6">
          <v-img
            src="https://via.placeholder.com/600x400"
            alt="Vision Image"
          ></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <h2 class="section-title">Our Vision</h2>
          <p>
            To create a global community of passionate individuals dedicated to
            lifelong growth and innovation.
          </p>
        </v-col>
      </v-row>

      <!-- Team Section -->
      <v-row id="team" class="mt-10">
        <v-col cols="12">
          <h2 class="section-title">Meet Our Team</h2>
          <p>
            Behind Path to Mastery is a team of dedicated professionals who
            share a common goal: to help you achieve yours.
          </p>
        </v-col>
        <!-- Example team cards -->
        <v-col
          cols="12"
          md="4"
          v-for="member in teamMembers"
          :key="member.name"
        >
          <v-card>
            <v-img :src="member.photo" height="200px"></v-img>
            <v-card-title>{{ member.name }}</v-card-title>
            <v-card-subtitle>{{ member.role }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>

      <!-- Contact Section -->
      <v-row id="contact" class="mt-10">
        <v-col cols="12">
          <h2 class="section-title">Contact Us</h2>
          <p>
            Have questions or want to get in touch? Drop us a message, and we'll
            get back to you!
          </p>
          <v-btn color="primary" href="mailto:contact@pathtomastery.com"
            >Send Email</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Example team member data
const teamMembers = ref([
  {
    name: "John Doe",
    role: "Founder & CEO",
    photo: "https://via.placeholder.com/200",
  },
  { name: "Jane Smith", role: "CTO", photo: "https://via.placeholder.com/200" },
  {
    name: "Emily Davis",
    role: "Lead Designer",
    photo: "https://via.placeholder.com/200",
  },
]);
</script>

<style scoped>
.title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: center;
}

.social-icon {
  cursor: pointer;
  font-size: 24px;
}

.social-icon:hover {
  color: #8a0000;
}

.mt-10 {
  margin-top: 3rem;
}
</style>
