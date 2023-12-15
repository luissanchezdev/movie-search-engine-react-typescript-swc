import { TypeMovies } from "../constants/types"
import Movie from "./Movie"

export const ListOfMovies = ({ movies } : { movies : TypeMovies[] | null }) => {
  return (
    <ul className="movies">
      { 
        movies?.map(movie => (
          <Movie movie={ movie } key={ movie.id } />
        ) )
      }
    </ul>
  )
}

 export  const NoMovies = () => {
  return (
    <p>No results</p>
  )
}


const Movies = ({ movies } : { movies : TypeMovies[] | null})  => {
  const hasMovies = movies != null && movies.length > 0

  return (
    <>
      {
        hasMovies ? 
          <ListOfMovies movies= { movies } />
        : 
          <NoMovies />
      }
    </>
  )
}

export default Movies