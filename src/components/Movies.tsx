import { TypeMovies } from "../constants/types"
import Movie from "./Movie"

export const ListOfMovies = ({ movies } : { movies : TypeMovies[] }) => {
  return (
    <ul>
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


const Movies = ({ movies } : { movies : TypeMovies[]})  => {
  const hasMovies = movies.length > 0

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