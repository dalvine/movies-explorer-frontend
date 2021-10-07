import React from 'react';
import './Login.css';
import auth from '../../utils/auth'
import api from '../../utils/api'
import Logo from '../Logo/Logo'

function Login(setLoggedIn) {
  const [userData, setUserData] = React.useState({})
  const [formValid, setFormValid] = React.useState(false)
  const [emailError, setEmailError] = React.useState('')
  const [passwordError, setPasswordError] = React.useState('')

  React.useEffect(() => {
    if (emailError || passwordError) {
      return setFormValid(true)
    }
    setFormValid(false)
  }, [emailError, passwordError])

  const validityInput = input => {
    if (!input.checkValidity()) {
      switch (input.name) {
        case 'email':
          setEmailError(input.validationMessage);
          break;
        case 'password':
          setPasswordError(input.validationMessage);
          break;
        default:
          return;
      }
      return
    }
    resetValidMessage(input)
  }

  const resetValidMessage = input => {
    switch (input.name) {
      case 'email':
        setEmailError('');
        break;
      case 'password':
        setPasswordError('');
        break;
      default:
        return;
    }
  }


  const handleChange = e => {
    const {name, value} = e.target
    setUserData({
      ...userData,
      [name]: value
    })
    validityInput(e.target)
  }

  const handleSubmit = e => {
    e.preventDefault()
    auth.authorization(userData)
      .then(data => {
        localStorage.setItem('token', data.token)
        api._addTokenToHeaders(data.token)
        setLoggedIn(true)
      })
      .catch((e) => {
        // Promise.resolve(e)
        //   .then(err => err.then(error => alert(`Ошибка! ${error.message}`)))
        console.log(e)
        setUserData({})
      })
      .finally(() => {
        e.target.reset()
      })

  }

  return (
    <div className="login">
      <Logo />
      <h1 className="login__greeting">Рады видеть!</h1>
      <form className="login__form" onSubmit={handleSubmit}>
        <div className="login__field">
          <p className="login__input-title">E-mail</p>
          <input type="email" className={`login__input ${emailError ? "login__input_status_error" : ""}`}  name="email" value={userData.email || ''} onChange={handleChange} required/>
          {emailError ? (<span className="login__input-error">{emailError}</span>) : ''}
        </div>
        <div className="login__field">
          <p className="login__input-title">Пароль</p>
          <input type="password" className={`login__input ${passwordError ? "login__input_status_error" : ""}`} name="password" value={userData.password || ''} onChange={handleChange} minlength="5" required/>
          {passwordError ? (<span className="login__input-error">{passwordError}</span>) : ''}
        </div>
        <button className="login__submit" disabled={formValid}>Войти</button>
        <p className="login__text">Ещё не зарегистрированы? <a href="/sign-up" className="login__link">Регистрация</a></p>
      </form>
    </div>
    );
}

export default Login;
