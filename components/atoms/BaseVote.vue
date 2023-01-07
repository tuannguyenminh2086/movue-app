<template>
  <div class="transition-colors absolute rounded bottom-8 right-5 z-40 p-4  border  lg:flex lg:items-center xl:bottom-10 xl:right-24">
        
    <div class="flex items-center flex-col justify-center">
      <h3 class="font-bold text-4xl">{{ (Math.round((point! + Number.EPSILON) * 10) / 10) }} </h3>
      <div class="relative font-normal text-sm">{{ count  }} <small>votes</small></div>
    </div>
    
   
  </div>
</template>

<script setup lang="ts">

defineProps({
  point: Number,
  count: Number
})


</script>

<style scoped>

</style>