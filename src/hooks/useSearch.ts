import { useState, useEffect } from 'react'

export default function useSearch() {
  const [search, setSearch] = useState<string>('')
  const [error, setError] = useState<string>()

  // Creando validaciones con componentes controlados
  useEffect(() => {
    if(search.length < 3) {
      setError('The search must have at least 3 characters')
    } else {
      setError('')
    }
  },[ search ])

  return { search, setSearch, error, setError }
}