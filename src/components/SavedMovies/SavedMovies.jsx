import React from 'react';
import './SavedMovies.css';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer'
import MainApi from '../../utils/MainApi'
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [savedMovies, setSavedMovies] = React.useState([])
  const [foundFilms, setFoundFilms] = React.useState(null)
  const [countRequest, setCountRequest] = React.useState(0)

  React.useState(() => {
    MainApi.getMovies()
    .then(movies => {
      setSavedMovies(movies)
      setCountRequest(countRequest + 1)
    })
    .catch(err => err.then((err)=>alert(`Ошибка. ${err.message}`)))
    setIsLoading(false)
  }, [savedMovies])

 const searchMovie = (searchData) => {
   let shortFilm = savedMovies;
  if(searchData.shortFilm) {
    shortFilm = savedMovies.filter((movie) => {
      return movie.duration < 40
    })
  }
  setFoundFilms(shortFilm.filter(movie => {
    return movie.nameRU.toLowerCase().includes(searchData.value)
  }))
 }

 const deleteMovie = (key) => {
  if (foundFilms) {
    setFoundFilms(foundFilms.filter(e => !(e._id === key)))
  }
  setSavedMovies(savedMovies.filter(e => !(e._id === key)))
 }

  return (
    <>
      <SearchForm onSubmit={searchMovie} countItemInResponse={1}/>
      <section className="movies">
      {isLoading ? <Preloader /> : <MoviesCardList arrayMovies={foundFilms ? foundFilms : savedMovies} setArrayMovies={deleteMovie} countRequest={countRequest} isSavedMovie={true}/>}
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
