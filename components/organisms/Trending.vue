<template>
  <div class="px-5 max-w-[1440px] mx-auto xl:px-0">
    
    
    <div class="grid grid-cols-12 gap-4 items-center">
      <div class="col-span-6 lg:col-span-2 xl:col-span-2 flex">
        <AtomsHeading title="Trending" renderAs="h2" cls="mr-2" />
        <Icon name="heroicons-outline:arrow-trending-up" size="2em" class="text-green-500" />
      </div>
      <div class="hidden lg:flex lg:justify-center lg:col-span-3">
        <!-- <ul class="list-none flex">
          <li class="px-3">TV</li>
          <li class="px-3">Movie</li>
        </ul> -->
      </div>
    </div>

    <div v-if="pending">
      Loading..
    </div>
    <div v-else>
      <div v-if="data!.results" class="grid grid-cols-12 gap-6 my-14">

        <div v-for="m in data!.results" class="col-span-6 lg:col-span-4 xl:col-span-3 ">
          <AtomsBaseCardMovie v-bind="m" />
        </div>
      </div>
    </div>

   
  </div>
</template>

<script setup lang="ts">
  const { pending, data } = await useLazyFetch('/api/trending')
</script>
