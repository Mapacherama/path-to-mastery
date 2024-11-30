<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menubar from 'primevue/menubar'; 
import 'primeicons/primeicons.css'
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-100 text-gray-800">
    <header>
      <Menubar>
        <template #start>
          
        </template>
        <template #end>
          <router-link to="/" class="p-menuitem-link">Home</router-link>
          <router-link to="/about" class="p-menuitem-link">About</router-link>
        </template>
      </Menubar>
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
