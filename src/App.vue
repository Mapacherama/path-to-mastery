<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-100 text-gray-800">
    <header class="bg-white shadow">
      <nav class="container mx-auto p-4">
        <ul class="flex space-x-4">
          <li>
            <router-link to="/" class="text-blue-500 hover:underline">Home</router-link>
          </li>
          <li>
            <router-link to="/about" class="text-blue-500 hover:underline">About</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main class="container mx-auto p-4">
      <router-view />
    </main>
    <footer class="bg-white shadow mt-4 p-4 text-center">
      <p class="text-gray-600">© 2023 Your Company</p>
    </footer>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
