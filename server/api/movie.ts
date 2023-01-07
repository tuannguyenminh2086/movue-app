import { z } from 'zod';


const Movie = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  budget: z.number(),
  id: z.number(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number().default(0),
  poster_path: z.string().nullable(),
  release_date: z.string(),
  revenue: z.number(),
  runtime: z.number(),
  status: z.string(),
  tagline: z.string(),
  title: z.string(),
  vote_average: z.number(),
  vote_count: z.number(),
  genres: z.array(z.object({
    id: z.number(),
    name: z.string()
  })),
  credits: z.object({
    cast: z.array(z.object({
      name: z.string(),
      character: z.string(),
      profile_path: z.string().nullable(),
      popularity: z.number(),
      order: z.number(),
    })).nullable()
  })
})


export default defineEventHandler(async (event) => {
  const {id} = getQuery(event)  
  const { apiKey, apiUrl } = useRuntimeConfig();
  const data = await $fetch(`${apiUrl}/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=credits`);
  
  return Movie.parse(data)

})


