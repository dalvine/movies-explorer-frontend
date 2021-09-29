import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'
import logoMovie from '../../images/logo-movie.png'

function MoviesCardList({arrayMovies, isSavedMovie}) {
  return (
    <>
      <ul className="movies__list">
        {
          arrayMovies.map(movie => {
            const {title,  duration, logo} = movie
            return <MoviesCard title={title} duration={duration} logo={logo} isSavedMovie={isSavedMovie}/>
          })
        }
      </ul>
      <button className="movies__more">Ещё</button>
    </>
  );
} 

export default MoviesCardList;
