import React from 'react';
import './MoviesCard.css';

function MoviesCard({title, duration, image}) {
  const [like, setLike] = React.useState(false)

  function changeLike() {
    setLike(!like)
  }

  return (
    <li className="movies__card">
      <h2 className="movies__title">{ title }</h2>
      <p className="movies__duration">{ duration }</p>
      <div className={`movies__like ${like ? 'movies__like_active': ''}`} onClick={changeLike}></div>
      <img className="movies__image" src={image} alt="logo" />
    </li>
  );
}

export default MoviesCard;
