import './SearchForm.css';
import icoSearch from '../../images/search-ico.svg'

function SearchForm() {
  return (
    <div className="search">
      <form className="search__form">
        <img className="search__ico" src={icoSearch} alt="поиск" />
        <input className="search__input" type="text" name="value" placeholder="Фильм"/>
        <button className="search__submit" type="submit">Найти</button>
        <div className="search__divider"></div>
        <input className="search__checkbox" type="checkbox" name="shortFilm" id="shortFilm" />
        <label className="checkbox" htmlFor="shortFilm">
          <div className="checkbox__switch">
            <div className="checkbox__tumbler"></div>
          </div>
          <p className="checkbox__text"> Короткометражки</p>
        </label>
      </form>
    </div>
  );
}

export default SearchForm;
