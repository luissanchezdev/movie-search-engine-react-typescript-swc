import { TypeMovies } from "../constants/types"

function Movie({ movie } : { movie : TypeMovies}) {
  return (
    <li key={ movie.id } className="movie">
      <img src={ movie.poster } alt={ movie.title } />
      <div className="infoMovie">
        <h3>{ movie.title }</h3>
        <p>{ movie.type }</p>
        <p>{ movie.year }</p>
      </div>
    </li>
  )
} 

export default Movie