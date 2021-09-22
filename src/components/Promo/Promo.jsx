import './Promo.css';
import promoImage from "../../images/promo-WEB.png";

function Promo() {
  return (
    <div className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <button className="promo__more">Узнать больше</button>
      <img src={promoImage} alt="Картинка промо" className="promo__image" />
    </div>
  );
}

export default Promo;
