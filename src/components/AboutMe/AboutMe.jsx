import './AboutMe.css';
import AboutMePhoto from '../../images/about-me-photo.png'

function AboutMe() {
  return (
    <div className="about-me">
      <img className="about-me__photo" src={AboutMePhoto} alt="#" />
      <p className="about-me__name">Владислав</p>
      <p className="about-me__job-age">Фронтенд-разработчик, 25 лет</p>
      <p className="about-me__biography">Я родился и живу в Саратове, закончил факультет экономики СГУ. 
      У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
      С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
      начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
      <ul className="about-me__social">
        <li className="about-me__item"><a href="#" className="about-me__link">VK</a></li>
        <li className="about-me__item"><a href="#" className="about-me__link">Github</a></li>
      </ul>
    </div>
  );
}

export default AboutMe;
