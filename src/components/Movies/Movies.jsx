import React from 'react';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer'
import moviesApi from '../../utils/MoviesApi'
import Preloader from '../Preloader/Preloader'

function Movies() {
  const [currentMovies, setCurrentMovies] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [countRequest, setCountRequest] = React.useState(0)

  async function getMovie(searchData) {
    setIsLoading(true)
    setCountRequest(countRequest + 1)
  let movies = await moviesApi.getMovies().catch(err => console.log(err))
    if(searchData.shortFilm) {
      movies = movies.filter((movie) => {
        return movie.duration < 40
      })
    }
    setCurrentMovies(movies.filter(movie => {
        console.log('фильтрую по слову')
        return movie.nameRU.toLowerCase().includes(searchData.value)
      }))

      setIsLoading(false)
    }


  return (
    <>
      <SearchForm onSubmit={getMovie} countItemInResponse={currentMovies.length}/>
      <section className="movies">
      {isLoading ? <Preloader /> : <MoviesCardList arrayMovies={currentMovies} countRequest={countRequest}/>}
      </section>
      <Footer />
    </>
  );
}

export default Movies;
