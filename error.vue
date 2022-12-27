<template>
  <div>
    <div class="flex w-full h-screen flex-col justify-center items-center">
      <AtomsBaseLogo />
      <div class="my-8">
        <h1 v-if="error.statusCode === 404">Page not found</h1>
        <h1 v-else>An error occurred - {{ error.statusCode }} </h1>
        <button class="btn my-7 border px-8 py-3 block w-full bg-red-500 hover:bg-red-600" @click="handleError">Go Home...</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps(['error'])
  useHead({
    title: 'Opps | Movue',
    meta: [
      { name: 'description', content: 'Movue - Find the upcoming movie trailer to hit the internet -- search and discover movie trailers on the web.'}
    ]
  })
  const handleError = () => clearError({ redirect: '/' })
</script>
