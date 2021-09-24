import React from 'react';
import './Register.css';
import Logo from '../Logo/Logo' 

function Register() {
  return (
    <div className="register">
      <Logo />
      <h1 className="register__greeting">Добро пожаловать!</h1>
      <form className="register__form">
        <div className="register__field">
          <p className="register__input-title">Имя</p>
          <input type="text" className="register__input" />
          <span className="register__input-error"></span>
        </div>
        <div className="register__field">
          <p className="register__input-title">E-mail</p>
          <input type="email" className="register__input" />
          <span className="register__input-error"></span>
        </div>
        <div className="register__field">
          <p className="register__input-title">Пароль</p>
          <input type="password" className="register__input register__input_status_error" />
          <span className="register__input-error">Что-то пошло не так...</span>
        </div>
        <button className="register__submit">Зарегистрироваться</button>
        <p className="register__text">Уже зарегистрированы? <a href="/login" className="register__link">Войти</a></p>
      </form>
    </div>
  );
}

export default Register;
