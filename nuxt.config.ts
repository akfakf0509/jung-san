// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-07-27",
  imports: {
    dirs: ["types"],
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@pinia/nuxt",
    "@vueuse/nuxt",
  ],
  eslint: {},
});