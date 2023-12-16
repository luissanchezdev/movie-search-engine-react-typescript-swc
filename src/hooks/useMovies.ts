import { useState } from 'react'
import { TypeMovies } from '../constants/types';
import searchMovies from '../services/movies';
import { useRef } from 'react';

export function useMovies({ search } : { search : string }) {
  const [movies, setMovies] = useState<TypeMovies[] | null>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>('')
  const previusSearch = useRef<string | null>(search)
  
  const getMovies = async () => {

    if(previusSearch.current === search) return

    try {
      setLoading(true)
      setError(null)
      previusSearch.current = search
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
