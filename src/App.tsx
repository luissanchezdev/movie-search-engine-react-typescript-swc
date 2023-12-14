import './App.css'
import responseMovies from './mocks/result-api-no-empty.json'
// import responseMoviesEmpty from './mocks/result-api-empty.json'
import Movies from './components/Movies'

function App() {

  const movies = responseMovies.Search

  return (
    <div className='page'>
      <header>
        <h1>Movie Search Engine</h1>
        <form>
          <input type='text' id='input-search' name='input-search' placeholder='Avatar, Titanic, Martian...' />
          <button type='submit'>Search</button>
        </form>
      </header>
      <main>
        <Movies movies={ movies } />
      </main>
    </div>
  )
}

export default App
