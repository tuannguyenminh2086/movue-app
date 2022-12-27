<template>
  <div class="my-10">
    <div class="flex items-center space-x-1">
     
      <span class="block pr-5">Page: {{ page }}</span>
      <span @click.stop="prevClick"
        class="cursor-pointer px-4 py-2 text-gray-500 bg-gray-300/20 rounded-md hover:bg-yellow-500 hover:text-white"
      >
        Previous
      </span>
      <span class="block px-1"></span>

      <span @click.stop="nextClick" class="cursor-pointer px-4 py-2 text-gray-500 bg-gray-300/20 rounded-md hover:bg-yellow-500 hover:text-white">
        Next
      </span>
  </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  totalPages: { type: Number, required: true },
  totalResults: { type: Number, required: true },
  page: { type: Number, required: true },
})

// const emit = defineEmits(['prevHandle', 'nextHandle'])
const emit = defineEmits<{
  (e: 'prevHandle') : void
  (e: 'nextHandle') : void
}>()

const prevClick = () => {
  emit('prevHandle')
}

const nextClick = () => {
  emit('nextHandle')
}
</script>

<style scoped>

</style>