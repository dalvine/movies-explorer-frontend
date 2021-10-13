import React from 'react';
import { useHistory } from 'react-router';
import './Login.css';
import Logo from '../Logo/Logo'
import MainApi from '../../utils/MainApi'

function Login({ setLoggedIn }) {
  const [userData, setUserData] = React.useState({})
  const [formValid, setFormValid] = React.useState(false)
  const [emailError, setEmailError] = React.useState('')
  const [passwordError, setPasswordError] = React.useState('')
  const history = useHistory()

  React.useEffect(() => {
    if (emailError || passwordError) {
      return setFormValid(false)
    }
    setFormValid(true)
  }, [emailError, passwordError])

  React.useEffect(() => {
    if (!(userData.password && userData.email)) setFormValid(false)
  }, [userData.password, userData.email])

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
    MainApi.authorization(userData)
      .then(data => {
        localStorage.setItem('token', data.token)
        MainApi.addTokenToHeaders(data.token)
        setLoggedIn(true)
        history.push('/movies')
      })
      .catch((err) => {
        err.then((err)=>alert(`Ошибка. ${err.message}`))
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
          <input type="password" className={`login__input ${passwordError ? "login__input_status_error" : ""}`} name="password" value={userData.password || ''} onChange={handleChange} minLength={5} required/>
          {passwordError ? (<span className="login__input-error">{passwordError}</span>) : ''}
        </div>
        <button className="login__submit" disabled={!formValid}>Войти</button>
        <p className="login__text">Ещё не зарегистрированы? <a href="/sign-up" className="login__link">Регистрация</a></p>
      </form>
    </div>
    );
}

export default Login;
