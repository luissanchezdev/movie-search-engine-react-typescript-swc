import responseMovies from '../mocks/result-api-no-empty.json'

// La idea de este hook es encargarse de todo el fetching de datos

export function useMovies() {
  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      poster: movie.Poster,
      title: movie.Title,
      year: movie.Year,
      type: movie.Type
    })
  )  
  return { movies : mappedMovies }
}
