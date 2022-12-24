export default defineEventHandler(async (event) => {

  // handle query params
  // const { name } = useQuery(event)

  // handle post data
  // const { age } = await useBody(event)

  // return {
  //   message: `Hello, ${name}! You are ${age} years old.`
  // }

  const { apiKey, apiUrl } = useRuntimeConfig();

  // api call with private key
  const {results} = await $fetch(`${apiUrl}/trending/movie/week?api_key=${apiKey}`);

  return results;
})
