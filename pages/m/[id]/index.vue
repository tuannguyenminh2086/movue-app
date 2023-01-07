<template>
  <div>
    Redirecting....
  </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params;
const { data } = await useLazyFetch('/api/movie/', { query: { id: id} , transform: data => data })

if (data.value) {
    const { title } = data.value
    if (title) {
      const slug = title.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
      await navigateTo(`/m/${id}/${slug}`)
    }
} 

</script>

<style scoped>

</style>