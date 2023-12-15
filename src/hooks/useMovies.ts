import responseWithResults from '../mocks/response-with-results.json'
import responseWithoutResults from '../mocks/response-without-results.json'
import { useState } from 'react'
import { TypeMovies, TypeMovieNoResults } from '../constants/types'

const newResponseWithResults = responseWithResults.Search?.map(movie => ({
  id: movie.imdbID,
  poster: movie.Poster,
  title: movie.Title,
  year: movie.Year,
  type: movie.Type
}))

export function useMovies({ search } : { search : string }) {
  const [responseMovies, setResponseMovies] = useState<TypeMovies[] | TypeMovieNoResults>([])
  const movies = Array.isArray(responseMovies) ? responseMovies : []

 /*  const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      poster: movie.Poster,
      title: movie.Title,
      year: movie.Year,
      type: movie.Type
    })
  ) */
  
  const getMovies = () => {
    if(search) {
      return setResponseMovies(newResponseWithResults) 
    } else {
      return setResponseMovies(responseWithoutResults)
    }
  }


  return { movies , getMovies }
}
