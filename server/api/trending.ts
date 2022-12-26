import { z } from 'zod';

const movies = z.array(z.object({
 adult: z.boolean(),
 id: z.number(),
 title: z.string(),
 original_language: z.string(),
 poster_path: z.string(),
 release_date: z.string(),
 vote_average: z.number(),
 vote_count: z.number()
}))


export default defineEventHandler(async (event) => {
  const { apiKey, apiUrl } = useRuntimeConfig();
  // api call with private key
  const response = await $fetch(`${apiUrl}/trending/movie/week?api_key=${apiKey}&language=en-US`);

  if (response) {
    const results = response.results;
    return movies.parse(results)
  }

})
