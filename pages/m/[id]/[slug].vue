<template>
  <div class="relative min-h-screen box-border">
    <div v-if="pending" class="h-full w-full flex justify-center items-center font-medium text-4xl">
      Loading ...
    </div>
    <div v-else>
      <OrganismsMovie :movie="data" />
      <!-- related || suggestion-->
    </div>
  </div>
</template>


<script setup lang="ts">
  definePageMeta({
    layout: "movie",
  });

  const { id } = useRoute().params;
  const { pending, data } = await useLazyFetch('/api/movie/', { query: { id: id} , transform: data => data })

</script>

<style scoped>

</style>