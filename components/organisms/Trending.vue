<template>
  <div class="px-5 max-w-[1440px] mx-auto xl:px-0">
    
    
    <div class="grid grid-cols-12 gap-4 items-center">
      <div class="col-span-6 lg:col-span-2 xl:col-span-2 flex">
        <AtomsHeading title="Trending" renderAs="h2" cls="mr-2" />
        <Icon name="heroicons-outline:arrow-trending-up" size="2em" />
      </div>
      <div class="hidden lg:flex lg:justify-center lg:col-span-3">
        <ul class="list-none flex">
          <li class="px-3">TV</li>
          <li class="px-3">Movie</li>
        </ul>
      </div>
    </div>

    <div class="grid grid-cols-12 gap-6 my-14">
      <div v-for="m in data" class="col-span-6 lg:col-span-4 xl:col-span-3 ">
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
