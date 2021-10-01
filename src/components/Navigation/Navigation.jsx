import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation({handleOpenedMenu, isOpenedMenu}) {
  return (
    <>
    <button className={`btn-opened-menu ${isOpenedMenu ? 'btn-opened-menu_active' : ''}`} onClick={handleOpenedMenu}></button>
    <ul className={`navigation ${isOpenedMenu ? 'navigation_opened' : ''}`}>
      <li className="navigation__item navigation__item_content_main">  <Link className='navigation__link' to='/'>  Главная </Link></li> 
      <li className="navigation__item navigation__item_active"><Link className='navigation__link' to='/movies'>  Фильмы </Link></li> 
      <li className="navigation__item"><Link className='navigation__link' to='/saved-movies'> Сохраненные фильмы </Link></li>
    </ul>
    </>
  );
}

export default Navigation;
