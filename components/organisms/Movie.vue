<template>
  <div class="relative">

    <div class="relative p-5 flex items-center h-screen w-full box-border lg:px-10 xl:px-24">
      <AtomsBaseCoverMovie :backdrop="movie.backdrop_path" />

      <div class="grid grid-cols-12 gap-4 relative z-40 ">
        <div class="col-span-full lg:col-span-4 xl:col-span-7 2xl:col-span-5">
          <h2 class="text-5xl font-bold text-shadow uppercase w-10/12 xl:text-8xl">{{movie.title}}</h2>
          <ul class="list-none mt-10 text-slate-200">
            <li class="mt-5">
              <span class="font-bold block uppercase text-3xl">{{ dateRelease }}</span>
              <span class="font-extralight block text-xl">{{ yearRelease }}</span>
            </li>
            <li class="mt-5">{{ movie.runtime }}</li>
          </ul>
        </div>
      </div>

      <span class="cursor-pointer absolute block bottom-8 left-10 z-40 xl:bottom-10 xl:left-24" @click="scrollTo">
        <Icon name="mdi-light:arrow-down-circle" size="4rem" />
      </span>

    </div>

    <div id="info" class="relative p-5 py-16 xl:py-32" ref="detailRef">
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-full lg:col-span-3"></div>
        <div class="col-span-full lg:col-span-6">
          <h3 class="text-3xl font-bold mb-6 uppercase">STORY</h3>
          <p class="text-xl font-light leading-relaxed">{{ movie.overview }}</p>
        </div>
        <div class="col-span-full lg:col-span-3">
          <h3 class="text-3xl font-bold mb-6  uppercase">Starring</h3>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'

interface IGenres {
  id: number
  name: string
}

interface IMovie {
  adult: boolean
  backdrop_path: string
  id: number
  imdb_id: string
  title: string
  budget: number
  genres: Array<IGenres>
  homepage: string
  original_language: string
  poster_path: string
  release_date: string
  vote_average: number
  vote_count: number
  overview: string
  popularity: number
  runtime: number | null
  revenue: number
  status: string
  tagline: string | null
  video: boolean
}

interface Props {
  movie: IMovie
}

const { movie } = defineProps<Props>()

console.log(movie);

const yearRelease = dayjs(movie.release_date).format('YYYY');
const dateRelease = dayjs(movie.release_date).format('DD MMMM');
const detailRef = ref(null)

useHead({
    title: movie.title + ' | Movue',
    meta: [
      { name: 'description', content: movie.overview }
    ]
  })

const scrollTo = () => {
  detailRef.value.scrollIntoView({ behavior: 'smooth' })
}

</script>

<style scoped>

</style>

<!-- adult: false,
  backdrop_path: '/tQ91wWQJ2WRNDXwxuO7GCXX5VPC.jpg',
  belongs_to_collection: {
    id: 87096,
    name: 'Avatar Collection',
    poster_path: '/uO2yU3QiGHvVp0L5e5IatTVRkYk.jpg',
    backdrop_path: '/iaEsDbQPE45hQU2EGiNjXD2KWuF.jpg'
  },
  budget: 460000000,
  genres: [
    { id: 878, name: 'Science Fiction' },
    { id: 12, name: 'Adventure' },
    { id: 14, name: 'Fantasy' },
    { id: 28, name: 'Action' }
  ],
  homepage: 'https://www.avatar.com/movies/avatar-the-way-of-water',
  id: 76600,
  imdb_id: 'tt1630029',
  original_language: 'en',
  original_title: 'Avatar: The Way of Water',
  overview: 'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
  popularity: 5753.237,
  poster_path: '/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
  production_companies: [
    {
      id: 574,
      logo_path: '/iB6GjNVHs5hOqcEYt2rcjBqIjki.png',
      name: 'Lightstorm Entertainment',
      origin_country: 'US'
    },
    {
      id: 127928,
      logo_path: '/cxMxGzAgMMBhTXkcpYYCxWCOY90.png',
      name: '20th Century Studios',
      origin_country: 'US'
    }
  ],
  production_countries: [ { iso_3166_1: 'US', name: 'United States of America' } ],
  release_date: '2022-12-14',
  revenue: 609800000,
  runtime: 192,
  spoken_languages: [ { english_name: 'English', iso_639_1: 'en', name: 'English' } ],
  status: 'Released',
  tagline: 'Return to Pandora.',
  title: 'Avatar: The Way of Water',
  video: false,
  vote_average: 8.074,
  vote_count: 1150 -->