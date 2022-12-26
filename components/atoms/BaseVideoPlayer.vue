<template>
  <div class="mb-10 box-border">
    <div class="relative pb-[56.25%] h-0 overflow-hidden">
      <iframe 
        :src="'https://www.youtube.com/embed/' + vid"
        width="560"
        height="315" 
        frameborder="0"
        allow="autoplay; encrypted-media" 
        allowfullscreen
        class="absolute inset-0 w-full h-full"
      />
    </div>

    <h4 class="py-3">{{name}}</h4>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: { type: String },
  vid: { type: String, required: true},
  site: { type: String}
})

</script>

