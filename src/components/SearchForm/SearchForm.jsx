import React from 'react';
import './SearchForm.css';
import icoSearch from '../../images/search-ico.svg'

function SearchForm({onSubmit, countItemInResponse}) {
  const [searchData, setSearchData] = React.useState({})

  const handleChangeRequest = e => {
    const { value } = e.target
    setSearchData({...searchData, value})
  }

  const handleChangeCheckbox = (e) => {
    setSearchData({...searchData, shortFilm: e.target.checked})
    if (searchData.value && countItemInResponse) onSubmit({...searchData, shortFilm: e.target.checked})
  }

  const changeSubmit = (e) => {
    e.preventDefault()
    onSubmit(searchData)
  }

  return (
    <div className={`search ${countItemInResponse ? '' : 'search_without-border'}`}>
      <form className="search__form" onSubmit={changeSubmit}>
        <img className="search__ico" src={icoSearch} alt="поиск" />
        <input className="search__input" type="text" name="value" onChange={handleChangeRequest} value={searchData.value || ''} placeholder="Фильм" required/>
        <button className="search__submit" type="submit">Найти</button>
        <div className="search__divider"></div>
        <input className="search__checkbox" type="checkbox" name="shortFilm" id="shortFilm" onChange={handleChangeCheckbox} />
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
