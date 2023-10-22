export const get_pokemon_index = (url: string) => {
  const partition_url = url.split("/")
  return partition_url[6]
}