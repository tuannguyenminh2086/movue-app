<template>
  <header id="header" :class="[defaultClass, sticky ? 'bg-slate-200/50': 'bg-transparent']" ref="siteHeaderRef">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-full lg:col-span-4">
        <NuxtLink href="/"><AtomsBaseLogo /></NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const siteHeaderRef = ref<HTMLDivElement | null>(null)
const sticky = ref<Boolean>(false)
const defaultClass = ref('p-5 w-full fixed top-0 left-0 z-50 xl:px-8 xl:py-8')

nextTick(() => {
  if (window){
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop >= 320) {
        sticky.value = true
      }
      else {
        sticky.value = false
      }
    })
  }
})

</script>