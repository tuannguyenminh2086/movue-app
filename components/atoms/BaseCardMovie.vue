<template>
  <div class="card shadow-md overflow-hidden rounded-3xl box-border transition-all duration-700 group relative hover:shadow-xl">
    <NuxtLink :href="detailUrl">
      <div class="transition-all duration-700 overflow-hidden relative z-20 group-hover:scale-110">
        <nuxt-picture :src="posterUrl" :imgAttrs="{class:'transition-all object-cover block w-full'}" width="404"
        height="606" />
      </div>
      <span class="hidden lg:flex justify-center w-11 h-11 items-center bg-yellow-500 text-white font-bold rounded-[100px] absolute bottom-4 left-4 z-50">
        {{ votePoint }}
      </span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  adult: { type: Boolean },
  id: { type: Number, required: true },
  title: { type: String, required: true },
  original_language: String,
  poster_path: String,
  release_date: String,
  vote_average: Number,
  vote_count: Number
})

const posterUrl = computed(() => 'https://image.tmdb.org/t/p/w500/' + props.poster_path)
const votePoint = computed(() => Math.round(props.vote_average!).toString() )

const slug = computed(() => props.title.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-') );
const detailUrl = computed(() => '/m/' + props.id + '/' + slug.value )
</script>

<style scoped>

</style>