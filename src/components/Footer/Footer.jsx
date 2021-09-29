import { ExternalLink } from 'react-external-link';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2021</p>
        <ul className="footer__list">
          <li className="footer__item"><ExternalLink href="https://practicum.yandex.ru/profile/web/" className="footer__link">Яндекс.Практикум</ExternalLink></li>
          <li className="footer__item"><ExternalLink href="https://github.com/dalvine" className="footer__link">Github</ExternalLink></li>
          <li className="footer__item"><ExternalLink href="https://vk.com/id30662177" className="footer__link">Вконтакте</ExternalLink></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
