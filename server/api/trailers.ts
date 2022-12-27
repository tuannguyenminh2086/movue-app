import { z } from 'zod';

const trailers = z.array(z.object({
  name: z.string(),
  key: z.string(),
  site: z.string(),
  type: z.string(),
  official: z.boolean()
})).nonempty()


export default defineEventHandler(async (event) => {
  const {id} = getQuery(event)  

  if (!id) {
    return { movie: 'not-found'}
  } else {
    const { apiKey, apiUrl } = useRuntimeConfig();
    const data = await $fetch(`${apiUrl}/movie/${id}/videos?api_key=${apiKey}&language=en-US`);
    return trailers.parse(data.results)
  }
 
})
