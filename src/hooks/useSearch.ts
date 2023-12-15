import { useState, useEffect, useRef } from 'react'

export default function useSearch() {
  const [search, setSearch] = useState<string>('')
  const [error, setError] = useState<string>()
  const isFirstRender = useRef(true)

  // Creando validaciones con componentes controlados
  useEffect(() => {
    // Usando una bandera para detectar el primer render
    if(isFirstRender.current) {
      isFirstRender.current = search === ''
      return
    }

    if(search.length < 3) {
      setError('The search must have at least 3 characters')
    } else {
      setError('')
    }
  },[ search ])

  return { search, setSearch, error, setError }
}