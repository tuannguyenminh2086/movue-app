<template>
  <div class="mb-6">
    <ul role="list" class="list-none flex flex-wrap">
      <li v-for="g in genres" :key="g.id" class="mr-2 mb-4">
        <span class="px-4 py-1 rounded-xl text-sm bg-slate-100/20">{{g.name}}</span>
      </li>

    </ul>
  </div>
</template>

<script setup lang="ts">
interface Props {
  genres: {
    id: number
    name: string
  }[]
}

const { genres } = defineProps<Props>()

</script>

<style scoped>

</style>