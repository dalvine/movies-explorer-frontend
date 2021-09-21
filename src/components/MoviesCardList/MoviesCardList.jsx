import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'
import logoMovie from '../../images/logo-movie.png'

function MoviesCardList() {
  return (
    <>
      <ul className="movies__list">
        <MoviesCard title="33 слова о дизайне" duration="1ч 42м" image={logoMovie}  />
        <MoviesCard title="Киноальманах «100 лет дизайна»" duration="1ч 42м" image={logoMovie}  />
        <MoviesCard title="В погоне за Бенкси" duration="1ч 42м" image={logoMovie} />
      </ul>
      <button className="movies__more">Ещё</button>
    </>
  );
} 

export default MoviesCardList;
