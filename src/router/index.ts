import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

// Import the components
import LandingPage from "@/components/LandingPage.vue";
import AboutPage from "@/components/AboutPage.vue";
import PathToDigitalStrategyPage from "@/components/PathToDigitalStrategyPage.vue";

// Define the routes with type annotations
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: LandingPage,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
  {
    path: "/path-to-digital-strategy",
    name: "Path To Digital Strategy",
    component: PathToDigitalStrategyPage,
  },
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
