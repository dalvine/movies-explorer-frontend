import './Navigation.css';

function Navigation() {
  return (
    <ul className="navigation">
      <li className="navigation__item navigation__item_active">Фильмы</li>
      <li className="navigation__item">Сохраненные фильмы</li>
    </ul>
  );
}

export default Navigation;
