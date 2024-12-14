<template>
  <v-app>
    <v-main>
      <!-- Hero Section -->
      <v-container fluid class="pa-0">
        <v-img
          src="@/assets/digital-strategy-hero.jpg"
          height="500px"
          class="white--text d-flex align-center justify-center"
        >
          <div class="text-center hero-overlay">
            <h1 class="display-2 font-weight-bold mb-4 hover-text">
              The Path of Wisdom and Strategy
            </h1>
            <p class="subtitle-1 mb-4 hover-text">
              A New Era of Strategy: Applying the Lessons of History to Modern
              Life and Digital Strategy
            </p>
            <v-btn class="btn" large>Discover the Journey</v-btn>
          </div>
        </v-img>
      </v-container>

      <!-- Introduction Section -->
      <v-container class="py-10">
        <v-row align="center">
          <v-col cols="12" md="6">
            <h2>The Power of Timeless Wisdom</h2>
            <div class="text-container">
              <p>
                History is not just a record of the past; it’s a guide to the
                future. By drawing lessons from great thinkers and leaders like
                Alexander the Great, Miyamoto Musashi, and Marcus Aurelius, I’ve
                discovered principles that transcend time—and I’m bringing them
                into the modern digital dojo. This fusion of historical insight
                and digital innovation creates strategies that are as resilient
                as they are forward-thinking.
              </p>
              <p>
                In website development, as in life, progress is iterative. It
                starts with a foundation, evolves through continuous reflection
                and action, and culminates in something worth sharing with the
                world. This process mirrors my life philosophy: think deeply,
                act decisively, and refine persistently.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <v-img
              src="@/assets/timeless-wisdom.jpg"
              height="300px"
              contain
              class="about-image"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>

      <!-- Philosophy Section -->
      <v-container class="py-10">
        <h2 class="text-center mb-6">What This Path Reflects About Me</h2>
        <v-row>
          <v-col cols="12" md="4">
            <v-card>
              <v-img
                src="@/assets/long-term-thinking.jpg"
                height="200px"
              ></v-img>
              <v-card-title>Think Long-Term</v-card-title>
              <v-card-text>
                Every decision is a step toward a larger vision.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card>
              <v-img
                src="@/assets/adapt-to-challenges.jpg"
                height="200px"
              ></v-img>
              <v-card-title>Adapt to Challenges</v-card-title>
              <v-card-text>
                Resilience and flexibility are essential for growth.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card>
              <v-img
                src="@/assets/build-with-purpose.jpg"
                height="200px"
              ></v-img>
              <v-card-title>Build with Purpose</v-card-title>
              <v-card-text>
                Every action contributes to a meaningful whole.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- Lessons Section -->
      <v-container class="py-10">
        <h2 class="text-center mb-6">Timeless Lessons That Shape My Path</h2>
        <v-row>
          <v-col cols="12" md="4">
            <v-card>
              <v-img src="@/assets/alexander-great.jpg" height="200px"></v-img>
              <v-card-title>Alexander the Great</v-card-title>
              <v-card-text>
                “Surround yourself with people who elevate your vision.”
                <br />
                In life and work, the team you build determines the heights you
                can reach.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card>
              <v-img src="@/assets/musashi.jpg" height="200px"></v-img>
              <v-card-title>Miyamoto Musashi</v-card-title>
              <v-card-text>
                “Master the way in all things—discipline in one area sharpens
                discipline in others.”
                <br />
                My iterative approach to website development reflects Musashi’s
                teachings.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card>
              <v-img src="@/assets/marcus-aurelius.jpg" height="200px"></v-img>
              <v-card-title>Marcus Aurelius</v-card-title>
              <v-card-text>
                “Your mind shapes your reality—focus on what you can control.”
                <br />
                This Stoic mindset guides my personal growth and digital
                strategies.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- Conclusion Section -->
      <v-container fluid class="pa-0">
        <v-img
          src="@/assets/modern-strategy.jpg"
          height="500px"
          class="white--text d-flex align-center justify-center"
        >
          <div class="hero-overlay">
            <h1 class="hero-title hover-text">
              Bringing Ancient Wisdom into Modern Strategy
            </h1>
            <blockquote class="subtitle-2 italic mb-4 hover-text">
              "Start with a foundation, reflect, act decisively, and inspire
              others."
            </blockquote>
            <v-btn class="btn mt-4" large> Begin Your Path </v-btn>
          </div>
        </v-img>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
// Placeholder imports for assets
</script>
