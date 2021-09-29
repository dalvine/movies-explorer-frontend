import React from 'react';
import './Portfolio.css';
import { ExternalLink } from 'react-external-link';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__link-list">
        <li className="portfolio__link-list-item">
          <ExternalLink className="portfolio__link" href="http://#">Статичный сайт</ExternalLink>
        </li>
        <li className="portfolio__link-list-item">
          <ExternalLink className="portfolio__link" href="http://#">Адаптивный сайт</ExternalLink>
        </li>
        <li className="portfolio__link-list-item">
          <ExternalLink className="portfolio__link" href="http://#">Одностраничное приложение</ExternalLink>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
