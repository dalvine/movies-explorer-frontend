import './Navigation.css';

function Navigation({handleOpenedMenu, isOpenedMenu}) {
  return (
    <>
    <button className={`btn-opened-menu ${isOpenedMenu ? 'btn-opened-menu_active' : ''}`} onClick={handleOpenedMenu}></button>
    <ul className={`navigation ${isOpenedMenu ? 'navigation_opened' : ''}`}>
      <li className="navigation__item navigation__item_content_main">Главная</li>
      <li className="navigation__item navigation__item_active">Фильмы</li>
      <li className="navigation__item">Сохраненные фильмы</li>
    </ul>
    </>
  );
}

export default Navigation;
