<template>
  <div id="castings" class="">
    <ul role="list" class="list-none">
      <li v-for="(c, key) in casts" :key="key" class="py-4 first:pt-0 last:pb-0">
        <AtomsBaseCast v-bind="c" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

export interface ICast {
  character: string
  name: string
  order: number
  profile_path: string
}

const props = defineProps({
  casts: { 
    type: Array as PropType<Array<ICast>>,
    required: true 
  },
  cls: { type: String}
})


</script>

<style scoped>

</style>
