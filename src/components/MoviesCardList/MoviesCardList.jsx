import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'
import MainApi from '../../utils/MainApi'
import { translitRuEn } from '../../utils/utils'

function MoviesCardList({arrayMovies, setArrayMovies, isSavedMovie, countRequest }) {

  const [isButtonMoreHidden, setIsButtonMoreHidden] = React.useState(false)
  const [maxCountСard] = React.useState(3)
  const [endIndex, setEndIndex] = React.useState(maxCountСard)
  

  React.useEffect(() => {
    setEndIndex(maxCountСard)
    arrayMovies.length > maxCountСard ? setIsButtonMoreHidden(true) : setIsButtonMoreHidden(false)
  }, [arrayMovies, maxCountСard])

  function deleteMovie(key) {
    MainApi.removeMovie({ _id : key })
    .then((res) => {
      setArrayMovies(key)
    })
  }

  const addCardToList = () => {
    if(arrayMovies.length <= (endIndex + maxCountСard)) {
      setEndIndex(arrayMovies.length)
      setIsButtonMoreHidden(false)
      return
    }
    setEndIndex(endIndex + maxCountСard)
  }

  const changeStrForLink = (str) => translitRuEn(str.replace(' ', '+'))

  return (
    <>
      <ul className="movies__list">
        { arrayMovies.length > 0 ?
          arrayMovies.slice(0, endIndex).map(movie => {
            let thumbnail, image, id, trailer
            if(isSavedMovie) {
              thumbnail = movie.thumbnail
              image = movie.image
              id = movie._id
              trailer = movie.trailer
            } else {
              thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`
              image = `https://api.nomoreparties.co${movie.image.url}`
              id = movie.id
              trailer = movie.trailerLink
            }
            
            const { nameRU, nameEN, duration, country, director, year, description } = movie
            return <MoviesCard 
                      key = { id }
                      _id = { id }
                      nameRU = { nameRU || 'none' } 
                      nameEN = { nameEN || 'none' }
                      duration = { duration } 
                      image = { image }
                      thumbnail = { thumbnail } 
                      trailer = { trailer || `https://www.youtube.com/results?search_query=${changeStrForLink(nameRU)}+trailer` } 
                      country = { country }
                      director = { director }
                      year = { year }
                      description = { description }
                      isSavedMovie = { isSavedMovie }
                      deleteMovie = {deleteMovie} />
          })
          : <p className="movies__text">{countRequest === 0 ? 'Введите название фильма для поиска' : isSavedMovie ? 'Список пуст' : `Ничего не найдено. Попробуйте изменить запрос.`}</p>
        }
      </ul>
      { isButtonMoreHidden ? <button className="movies__more" onClick={addCardToList}>Ещё</button> : '' }
    </>
  );
} 

export default MoviesCardList;
