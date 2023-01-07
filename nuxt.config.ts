// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        // { src: 'https://awesome-lib.js' }
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&family=Questrial&display=swap'}
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
        // { children: ':root { color: red }', type: 'text/css' }
      ],
      noscript: [
        // <noscript>Javascript is required</noscript>
        { children: 'Javascript is required' }
      ],
      bodyAttrs: {
        class: 'bg-black text-white font-poppins subpixel-antialiased text-base tracking-wide scroll-smooth'
      }
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    'nuxt-icon',
    ['@pinia/nuxt', {
      autoImports: [
        // automatically imports `defineStore`
        'defineStore', // import { defineStore } from 'pinia'
        // automatically imports `defineStore` as `definePiniaStore`
        ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
      ],
    },]
  ],
  runtimeConfig: {
    apiToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDBjMjY4ZWFiZmRjMWE2NjUyOGViN2VkMmExOTRhZCIsInN1YiI6IjVhODdmMWM4OTI1MTQxNzU5MzA0Y2RmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZyNNM_lBCIcUPyxLIdCunCaN8TPdZudssuM1o6lvKrU',
    apiKey: '800c268eabfdc1a66528eb7ed2a194ad',
    apiUrl: 'https://api.themoviedb.org/3'
  },
  image: {
    domains: ['image.tmdb.org']
  }
})
