<template>
  <div class="relative">

    <div class="relative p-5 flex items-center h-screen w-full box-border lg:px-10 xl:px-24">
      <AtomsBaseCoverMovie v-if="backdrop_path" :backdrop="backdrop_path" />

      <div class="grid grid-cols-12 gap-4 relative z-40 ">
        <div class="col-span-full lg:col-span-4 xl:col-span-7 2xl:col-span-7">
          <h2 class="text-5xl font-bold text-shadow uppercase w-10/12 xl:text-8xl 2xl:text-9xl">{{title}}</h2>
          <p class="" v-if="tagline">{{ tagline }}</p>
        </div>
        <div class="col-span-full lg:col-span-5 xl:col-span-3 2xl:col-span-3"></div>
        <div class="hidden col-span-full lg:block lg:col-span-3 xl:col-span-2">
          
        </div>
      </div>

      <button type="button" class="cursor-pointer absolute block bottom-8 left-5 z-40 lg:left-10 xl:bottom-10 xl:left-24" @click="scrollTo">
        <Icon name="mdi-light:arrow-down-circle" size="3rem" />
      </button>

      <AtomsBaseVote :point="vote_average" :count="vote_count" />
    </div>

    <div id="info" class="relative p-5 py-16 xl:py-32 xl:px-24" ref="detailRef">
      <div class="grid grid-cols-12 gap-6">
       
        <div class="col-span-full lg:col-span-3 ">
          <div class=" text-slate-200 mb-24">
            <div class="">
              <span>Release</span>
              <span class="font-bold block uppercase xl:text-3xl">{{ dayjs(release_date).format('DD MMM, YYYY') }}</span>
            </div>
          </div>

          <div class="mt-6 mb-24"> <span>Runtime</span><span class="text-2xl block">{{ runtime }} min</span></div>
          <div v-if="budget" class="mb-6"> <span>Budget</span> <span class="text-2xl block">{{ USDollar.format(budget) }}</span></div>
          <div v-if="revenue" class=""><span>Revenue</span> <span class="text-2xl block text-yellow-500">{{ USDollar.format(revenue) }}</span></div>
        </div>

        <div class="col-span-full lg:col-span-5">
          <MoleculesGenres v-if="genres" :genres="genres" />

          <div class="mt-20">
            <h3 class="text-lg font-bold mb-6 uppercase">STORY</h3>
            <p class="xl:text-2xl font-light !leading-relaxed">{{ overview }}</p>
          </div>

          <div class="mt-20">
            <h3 class="text-lg font-bold mb-6 uppercase">TRAILERS</h3>
            <MoleculesTrailers v-if="id" :mid="id" />
          </div>
          
        </div>
        <div class="col-span-full lg:col-span-3 lg:col-start-10 lg:flex lg:justify-end">
          <div class="mt-10">
            <h3 class="text-lg font-bold mb-6 uppercase">CAST</h3>
            <MoleculesStarring v-if="credits" :casts="credits?.cast" cls="" />
          </div>
        </div>
        
      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { type PropType } from 'vue'

export interface IGenres {
  id: number
  name: string
}

export interface ICast {
  character: string
  name: string
  order: number
  profile_path: string
}

export interface ICasts {
  cast: ICast[]
}

const props = defineProps({
  adult: Boolean,
  backdrop_path: String,
  id: Number,
  title: String,
  budget: Number,
  original_title: String,
  overview: {
    type: String,
    default: ''
  },
  popularity: {
    type: Number,
    default: 0
  },
  poster_path: {
    type: null as unknown as PropType<String | null>,
  },
  release_date: String,
  vote_average: Number,
  vote_count: Number,
  runtime: Number,
  revenue: Number,
  status: String,
  tagline: {
    type: String,
    default: ''
  },
  genres: {
    type: Array as PropType<Array<IGenres>>
  },
  credits: {
    type: Object as PropType<ICasts>
  }
})


const detailRef = ref<HTMLDivElement | null>(null)

useHead({
    title: props.title + ' | Movue',
    meta: [
      { name: 'description', content: props.overview }
    ]
  })

const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

const scrollTo = () => {
  if (detailRef.value) {
    detailRef.value.scrollIntoView({ behavior: 'smooth' })
  }
}

</script>

<style scoped>

</style>