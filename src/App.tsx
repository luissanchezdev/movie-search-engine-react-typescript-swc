import { useRef, useState, useEffect } from 'react'
import './App.css'
import Movies from './components/Movies'
import { useMovies } from './hooks/useMovies'

type TypeInputRef = HTMLInputElement

const styles = {
  error: {
    border: '1px solid red'
  },
  success: {
    border: '1px solid green'
  }
}

function App() {
  const { movies } = useMovies()
  const inputRef = useRef<TypeInputRef>(null)
  const [inputValue, setInputValue] = useState<string>('')
  const [error, setError] = useState<string>()


  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Accediendo a los inputs con useRef
/*  const inputSelect = inputRef.current
    const value = inputSelect?.value
    alert(value) */
    // Accediendo a los inputs con FormData
    /* const data =  Object.fromEntries(new window.FormData(e.currentTarget))
    console.log({ data }) */
    /* const inputValue = new window.FormData(e.currentTarget).get('input-search')
    alert(inputValue) */
    // Accediendo a los inputs con el useState
    console.log({ inputValue })
  }

  const handleChange  = (e : React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    if(newQuery.startsWith(' ')){
      return setError('The search must not start with spaces')
    } else {
      setInputValue(e.target.value)
    }
  }

  // Creando validaciones con componentes controlados
  useEffect(() => {
    if(inputValue.length < 3) {
      setError('The search must have at least 3 characters')
    } else {
      setError('')
    }
  },[ inputValue ])

  // useRef: los valor persisten entre renderizados
  /* const counter = useRef<number>(0)
  counter.current++
  console.log(counter.current) */

  return (
    <div className='page'>
      <header>
        <h1>Movie Search Engine</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input 
            value={ inputValue } 
            onChange={ e => handleChange(e) } 
            ref={ inputRef } 
            type='text' 
            id='input-search' 
            name='input-search' 
            placeholder='Avatar, Titanic, Martian...'
            style={ error ? styles.error : styles.success} 
          />
          <button type='submit'>Search</button>
        </form>
        { error && <p>{ error }</p> }
      </header>
      <main>
        <p>input value: { inputValue }</p>
        <Movies movies={ movies } />
      </main>
    </div>
  )
}

export default App
