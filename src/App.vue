<script setup lang="ts">
import { RouterView } from 'vue-router'
import Toolbar from 'primevue/toolbar'
import 'primeicons/primeicons.css'
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-100 text-gray-800">
    <header>
      <Toolbar>
        <template #start>
          <img src="@/assets/logo.webp" alt="Logo" class="logo" />
        </template>
        <template #end>
          <router-link to="/" class="p-toolbar-button">Home</router-link>
          <router-link to="/about" class="p-toolbar-button">About</router-link>
        </template>
      </Toolbar>
    </header>
    <main class="container mx-auto p-4">
      <RouterView />
    </main>
    <footer class="bg-white shadow mt-4 p-4 text-center">
      <p class="text-gray-600">© 2023 Your Company</p>
    </footer>
  </div>
</template>
<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
