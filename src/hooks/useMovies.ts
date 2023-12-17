import { useState, useMemo, useEffect } from 'react'
import { TypeMovies, TypePropsUseMovies } from '../constants/types';
import searchMovies from '../services/movies';
import { useRef } from 'react';

export function useMovies({ search, sort }: TypePropsUseMovies ) {
  const [movies, setMovies] = useState<TypeMovies[] | null>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>('')
  const previusSearch = useRef<string | null>(search)
  
  const getMovies = useMemo(() => {
    return async ({ search } : { search : string }) => {
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

  }}, [])

  useEffect(() => {
    console.log('render getMovies()')
  },[getMovies])

  const sortMovies = useMemo(() => {
    console.log('render sortMovies')
    return movies === null ? null : sort ? [...movies].sort((a,b) => a.title.localeCompare(b.title)) : movies
  },[movies, sort])
  
  return { movies : sortMovies , getMovies, loading, error }
}
