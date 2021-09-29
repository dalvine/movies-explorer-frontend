import React from 'react';
import './Promo.css';
import promoImage from "../../images/promo-WEB.png";

function Promo() {
  return (
    <section className="promo">
      <img src={promoImage} alt="Картинка промо" className="promo__image" />
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <a  href='#about' className="promo__link-btn"><button className="promo__more">Узнать больше</button></a>
    </section>
  );
}

export default Promo;
