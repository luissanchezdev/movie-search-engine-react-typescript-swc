import { TypeMovies } from "../constants/types"

export const ListOfMovies = ({ movies } : { movies : TypeMovies[] }) => {
  return (
    <ul>
      { 
        movies.map(movie => (
          <li key={ movie.imdbID }>
            <img src={ movie.Poster } alt={ movie.Title } />
            <h3>{ movie.Title }</h3>
            <p>{ movie.Type }</p>
            <p>{ movie.Year }</p>
          </li>
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