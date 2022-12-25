export default defineEventHandler(async (event) => {
  const {id} = getQuery(event)  

  if (!id) {
    return { movie: 'not-found'}
  } else {
    const { apiKey, apiUrl } = useRuntimeConfig();
    const data = await $fetch(`${apiUrl}/movie/${id}?api_key=${apiKey}&language=en-US`);
    if (data) {
      return { movie: data }
    } else {
      return { movie: 'not-found'}
    }
    
  }
 
})
