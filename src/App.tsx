import './App.css'
import Movies from './components/Movies'
import { useMovies } from './hooks/useMovies'
import useSearch from './hooks/useSearch'
import { useState } from 'react'
import { TypePropsUseMovies } from './constants/types'

function App() {
  const { search, setSearch, error, setError } = useSearch()
  const [sort, setSort] = useState<Boolean>(false)
  const { movies, getMovies, loading } = useMovies({ search, sort } as TypePropsUseMovies)

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    console.log(data.get('input-search'))
    getMovies()
  }

  const handleChange  = (e : React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    if(newQuery.startsWith(' ')){
      return setError('The search must not start with spaces')
    } else {
      setSearch(e.target.value)
    }
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Movie Search Engine</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input 
            value={ search } 
            onChange={ e => handleChange(e) } 
            type='text' 
            id='input-search' 
            name='input-search' 
            placeholder='Avatar, Titanic, Martian...'
          />
          <input type='checkbox' id='sort' name='sort' onChange={ handleSort } />
          <button type='submit'>Search</button>
        </form>
        { error && <p>{ error }</p> }
      </header>
      <main>
        {
          loading ? <p>loading...</p> : <Movies movies={ movies } />
        }
      </main>
    </div>
  )
}

export default App
