import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation({handleOpenedMenu, isOpenedMenu}) {
  const location = useLocation()
  const checkRoute = route => route === location.pathname
  
  return (
    <>
      <button className={`btn-opened-menu ${isOpenedMenu ? 'btn-opened-menu_active' : ''}`} onClick={handleOpenedMenu} />
      <ul className={`navigation ${isOpenedMenu ? 'navigation_opened' : ''}`}>
        <li className={`navigation__item navigation__item_content_main ${checkRoute('/') ? "navigation__item_active" : ""}`}>
          <Link className='navigation__link' to='/'>  Главная </Link>
        </li> 
        <li className={`navigation__item ${checkRoute('/movies') ? "navigation__item_active" : ""}`}>
          <Link className='navigation__link' to='/movies'>  Фильмы </Link>
        </li> 
        <li className={`navigation__item ${checkRoute('/saved-movies') ? "navigation__item_active" : ""}`}>
          <Link className='navigation__link' to='/saved-movies'> Сохраненные фильмы </Link>
        </li>
      </ul>
    </>
  );
}

export default Navigation;
