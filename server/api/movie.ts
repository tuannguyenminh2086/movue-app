export default defineEventHandler(async (event) => {
  const {id} = getQuery(event)  

  if (!id) {
    return 'not-found'
  } else {
    const { apiKey, apiUrl } = useRuntimeConfig();
    const data = await $fetch(`${apiUrl}/movie/${id}?api_key=${apiKey}&language=en-US`);
    
    if (data) {
      return data
    } else {
      return 'not-found'
    }
    
  }
 
})
