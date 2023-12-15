import { TypeMovies } from "../constants/types"

function Movie({ movie } : { movie : TypeMovies}) {
  return (
    <li key={ movie.id }>
      <img src={ movie.poster } alt={ movie.title } />
      <h3>{ movie.title }</h3>
      <p>{ movie.type }</p>
      <p>{ movie.year }</p>
    </li>
  )
} 

export default Movie