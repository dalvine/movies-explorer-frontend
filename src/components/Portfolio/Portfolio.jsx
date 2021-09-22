import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__link-list">
        <li className="portfolio__link-list-item">
          <a className="portfolio__link" href="#">Статичный сайт</a>
        </li>
        <li className="portfolio__link-list-item">
          <a className="portfolio__link" href="#">Адаптивный сайт</a>
        </li>
        <li className="portfolio__link-list-item">
          <a className="portfolio__link" href="#">Одностраничное приложение</a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
