<template>
  <div class="max-w-[1920px] mx-auto">
    <AtomsHeading title="Trending" renderAs="h2" cls="" />
    
    <div class="grid grid-cols-12 gap-6 my-14 2xl:grid-cols-10">
      <div v-for="m in data" class="col-span-6 lg:col-span-4 xl:col-span-3 2xl:col-span-2">
        <AtomsBaseCardMovie
            :adult="m.adult"
            :id="m.id"
            :title="m.title"
            :original_language="m.original_language"
            :poster_path="m.poster_path"
            :release_date="m.release_date"
            :vote_average="m.vote_average"
            :vote_count="m.vote_count"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { data } = await useFetch('/api/trending')
</script>

<style scoped>

</style>