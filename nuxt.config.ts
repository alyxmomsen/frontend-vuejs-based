
import { resolve } from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true } ,
  alias: {
    "@": resolve(__dirname , "/")
  } ,
  css: [
    "~/assets/scss/main.scss" ,
    // '~/assets/css/main.css'
  ] , 
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    
  } ,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
}) ;