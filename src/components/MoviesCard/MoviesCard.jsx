import React from 'react';
import { ExternalLink } from 'react-external-link';
import './MoviesCard.css';
import MainApi from '../../utils/MainApi'

function MoviesCard({_id, movieId, nameRU, nameEN, image,  duration, thumbnail, trailer, country, director, year, description, isSavedMovie, deleteMovie }) {
  const [like, setLike] = React.useState(false)
  const [ idAddedMovie, setIdAddedMovie ] = React.useState(false)

  React.useEffect(() => {
    if(!isSavedMovie) {

      MainApi.getMovies()
      .then( movies => {
        const findMovie = movies.find(movie => movie.nameRU === nameRU)
        if(findMovie) {
          setLike(true)
          setIdAddedMovie(findMovie._id)
        }
      })
    }
  }, [isSavedMovie, nameRU])

  function changeLike() {
    const data = {movieId: _id, nameRU, nameEN, image,  duration, thumbnail, trailer, country, director, year, description}
    try {
        if(like) {
        data['_id'] = idAddedMovie
        console.log(data)
        MainApi.removeMovie(data)
          .then(() => setLike(false))
      } else {
        MainApi.addMovie(data)
          .then((res) => {
            setIdAddedMovie(res._id)
            setLike(true)
          })
      }
    } catch(e) {
      alert(`Произошла ошибка. ${e.message}`)
    }
  }

  const convertMinutesToHours = (value) => {
    const hours = Math.floor(value/60)
    const minutes = value - hours * 60
    return `${hours} ч ${minutes} мин`
  }

  return (
    <li key={ movieId } className="movies__card">
      <ExternalLink href={ trailer }><img className="movies__image" src={thumbnail} alt="logo" /></ExternalLink>
      <h2 className="movies__title">{ nameRU }</h2>
      <p className="movies__duration">{ convertMinutesToHours(duration) }</p>
      {isSavedMovie 
      ? (<div className='movies__remove' onClick={ () => deleteMovie(_id) }></div>)
      : (<div className={`movies__like ${like ? 'movies__like_active': ''}`} onClick={changeLike}></div>) }
    </li>
  );
}

export default MoviesCard;
