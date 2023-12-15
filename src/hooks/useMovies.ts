import { useState } from 'react'
import { TypeMovies } from '../constants/types';
import searchMovies from '../services/movies';

export function useMovies({ search } : { search : string }) {
  const [movies, setMovies] = useState<TypeMovies[] | null>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>('')
  
  const getMovies = async () => {

    try {
      setLoading(true)
      setError(null)
      const newData = await searchMovies(search)
      setMovies(newData)
    } catch(e : any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }

  }
  

  return { movies , getMovies, loading, error }
}
