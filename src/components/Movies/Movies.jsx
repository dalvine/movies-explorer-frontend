import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import logoMovie from '../../images/logo-movie.png'

function Movies() {
  return (
   <section className="movies">
     <MoviesCardList  
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

export default Movies;
