import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-07-27",
  imports: {
    dirs: ["types"],
  },
  modules: ["@nuxt/eslint", "@pinia/nuxt", "@vueuse/nuxt", "reka-ui/nuxt"],
  eslint: {},
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/main.css"],
});
