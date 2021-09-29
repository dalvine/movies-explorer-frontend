import React from 'react';
import './AboutMe.css';
import AboutMePhoto from '../../images/about-me-photo.png'
import { ExternalLink } from 'react-external-link';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__description">
        <p className="about-me__name">Владислав</p>
        <img className="about-me__photo" src={AboutMePhoto} alt="#" />
        <p className="about-me__job-age">Фронтенд-разработчик, 25 лет</p>
        <p className="about-me__biography">Я родился и живу в Саратове, закончил факультет экономики СГУ. 
        У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
        С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
        начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        </div>
      <ul className="about-me__social">
        <li className="about-me__item"><ExternalLink href="http://vk.com/id30662177" className="about-me__link">VK</ExternalLink></li>
        <li className="about-me__item"><ExternalLink href="https://github.com/dalvine" className="about-me__link">Github</ExternalLink></li>
      </ul>
    </section>
  );
}

export default AboutMe;
