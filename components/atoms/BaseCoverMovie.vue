<template>
  <div class="h-screen absolute inset-0 w-full box-border overflow-hidden opacity-60 z-10 ">
    <nuxt-picture :src="coverUrl" :imgAttrs="{class:'transition-all object-cover object-center block w-full h-full'}" width="100%"
    height="100%" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  backdrop: string
}

const { backdrop } = defineProps<Props>()
const coverUrl = computed(() => backdrop ? 'https://image.tmdb.org/t/p/original' + backdrop : '' )

</script>

<style scoped>

</style>