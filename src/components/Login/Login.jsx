import React from 'react';
import './Login.css';
import Logo from '../Logo/Logo'

function Login() {
  return (
    <div className="login">
      <Logo />
      <h1 className="login__greeting">Рады видеть!</h1>
      <form className="login__form">
        <div className="login__field">
          <p className="login__input-title">E-mail</p>
          <input type="email" className="login__input" required/>
          <span className="login__input-error"></span>
        </div>
        <div className="login__field">
          <p className="login__input-title">Пароль</p>
          <input type="password" className="login__input login__input_status_error" required/>
          <span className="login__input-error">Что-то пошло не так...</span>
        </div>
        <button className="login__submit">Войти</button>
        <p className="login__text">Ещё не зарегистрированы? <a href="/sign-up" className="login__link">Регистрация</a></p>
      </form>
    </div>
    );
}

export default Login;
