import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({arrayMovies, isSavedMovie, countRequest}) {

  const [isButtonMoreHidden, setIsButtonMoreHidden] = React.useState(false)
  const [maxCountСard] = React.useState(3)
  const [endIndex, setEndIndex] = React.useState(maxCountСard)
  

  const convertMinutesToHours = (value) => {
    const hours = Math.floor(value/60)
    const minutes = value - hours * 60
    return `${hours} ч ${minutes} мин`
  }

  React.useEffect(() => {
    setEndIndex(maxCountСard)
    arrayMovies.length > maxCountСard ? setIsButtonMoreHidden(true) : setIsButtonMoreHidden(false)
  }, [arrayMovies, maxCountСard])

  const addCardToList = () => {
    console.log(arrayMovies.length, (endIndex + maxCountСard))
    if(arrayMovies.length <= (endIndex + maxCountСard)) {
      setEndIndex(arrayMovies.length)
      setIsButtonMoreHidden(false)
      return
    }
    setEndIndex(endIndex + maxCountСard)
  }

  return (
    <>
      <ul className="movies__list">
        { arrayMovies.length > 0 ?
          arrayMovies.slice(0, endIndex).map(movie => {
            const logo = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`
            const {id, nameRU, duration, trailerLink} = movie
            return <MoviesCard key={id} title={nameRU} duration={convertMinutesToHours(duration)} logo={logo} trailerLink={trailerLink} isSavedMovie={isSavedMovie}/>
          })
          : <p className="movies__text">{countRequest === 0 ? 'Введите название фильма для поиска' : `Ничего не найдено. Попробуйте изменить запрос.`}</p>
        }
      </ul>
      { isButtonMoreHidden ? <button className="movies__more" onClick={addCardToList}>Ещё</button> : '' }
    </>
  );
} 

export default MoviesCardList;
