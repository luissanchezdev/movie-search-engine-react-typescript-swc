export type TypeMovies = {
  id: string;
  poster: string;
  title: string;
  year: string;
  type: string;
}

export type TypeMoviesApi = {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
  Type: string;
}

export type TypeMovieNoResults ={
  Response?: string;
  Error?: string;
}

export type TypePropsUseMovies = {
  search: string,
  sort: boolean
}