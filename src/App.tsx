import './App.css'
import Movies from './components/Movies'
import { useMovies } from './hooks/useMovies'
import useSearch from './hooks/useSearch'
import { useRef } from 'react'


function App() {
  const { movies } = useMovies()
  const { search, setSearch, error, setError } = useSearch()

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    console.log(data.get('input-search'))
  }

  const handleChange  = (e : React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    if(newQuery.startsWith(' ')){
      return setError('The search must not start with spaces')
    } else {
      setSearch(e.target.value)
    }
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
          <button type='submit'>Search</button>
        </form>
        { error && <p>{ error }</p> }
      </header>
      <main>
        <Movies movies={ movies } />
      </main>
    </div>
  )
}

export default App
