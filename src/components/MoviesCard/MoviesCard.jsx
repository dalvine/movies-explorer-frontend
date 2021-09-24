import React from 'react';
import './MoviesCard.css';

function MoviesCard({title, duration, image, isSavedMovie}) {
  const [like, setLike] = React.useState(false)

  function changeLike() {
    setLike(!like)
  }

  return (
    <li className="movies__card">
      <img className="movies__image" src={image} alt="logo" />
      <h2 className="movies__title">{ title }</h2>
      <p className="movies__duration">{ duration }</p>
      {isSavedMovie 
      ? (<div className='movies__remove' onClick={() => console.log('remove movie')}></div>)
      : (<div className={`movies__like ${like ? 'movies__like_active': ''}`} onClick={changeLike}></div>) }
    </li>
  );
}

export default MoviesCard;
