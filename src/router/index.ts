import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

// Import the components
import LandingPage from "@/components/LandingPage.vue";
import AboutPage from "@/components/AboutPage.vue";

// Define the routes with type annotations
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: LandingPage, // Link Home to LandingPage
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage, // Link Home to LandingPage
  },
  // Add other routes as needed
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Optional: Handle errors (similar to your original code)
router.onError((err, to) => {
  if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
    if (!localStorage.getItem("vuetify:dynamic-reload")) {
      console.log("Reloading page to fix dynamic import error");
      localStorage.setItem("vuetify:dynamic-reload", "true");
      location.assign(to.fullPath);
    } else {
      console.error("Dynamic import error, reloading page did not fix it", err);
    }
  } else {
    console.error(err);
  }
});

// Clean up local storage on router readiness
router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

// Export the router instance
export default router;
