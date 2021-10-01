import React from 'react';
import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import logoMovie from '../../images/logo-movie.png'

function SavedMovies() {
  return (
    <section className="movies">
      <MoviesCardList  
      isSavedMovie={true}
      arrayMovies={
        [
          { title: "33 слова о дизайне", duration: "1ч 42м", logo: logoMovie}, 
          { title: "Киноальманах «100 лет дизайна»", duration: "1ч 42м", logo: logoMovie}, 
          { title: "В погоне за Бенкси", duration: "1ч 42м", logo: logoMovie}, 
          ]
      }/>
    </section>
  );
}

export default SavedMovies;
