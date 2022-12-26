<template>
  <div>
    <div v-if="pending">
      Loading ...
    </div>
    <div v-else>
      <div v-for="t in data" :key="t.id">
        <AtomsBaseVideoPlayer :vid="t.key" :name="t.name" :site="t.site" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  mid: { type: Number, required: true }
})

const { pending, data } = await useLazyFetch('/api/trailers', { query: { id: props.mid} , transform: trailers => trailers.filter( trailer => trailer.official ) })

</script>

<style scoped>

</style>
