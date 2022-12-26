<template>
  <div class="flex items-center">
    <div class="w-20 h-20 overflow-hidden rounded-[200px]">
      <nuxt-picture :src="profile_path ? 'https://image.tmdb.org/t/p/w500/' + profile_path : '/img/p.png'" :imgAttrs="{class:'transition-all object-cover block w-full'}" width="44"
        height="44" :alt="name" />
    </div>
    <div class="ml-5">
      <h4 class="font-bold text-xl text-yellow-500">{{name}}</h4>
      <h5 class="font-normal text-sm">{{ character }}</h5>
    </div>
   
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  character: String,
  name: String,
  order: Number,
  profile_path: String
})

</script>