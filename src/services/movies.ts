import { TypeMoviesApi, TypeMovies } from '../constants/types'
import { baseURL } from '../utils/config'


const searchMovies = async (search : string) => {

  if(search === '') {
    return null
  }

  try {
    const response = await fetch(`${baseURL}s=${search}`)
    const json = await response.json()

    const movies : TypeMoviesApi[] = json.Search
    const newMovies : TypeMovies[] = movies?.map(movie => ({
      id: movie.imdbID,
      poster: movie.Poster,
      title: movie.Title,
      year: movie.Year,
      type: movie.Type
    }))
    return newMovies
  } catch(error) {
    throw new Error('Error searching movies')
  }
}

export default searchMovies