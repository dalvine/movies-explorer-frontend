import React from 'react';
import { useHistory } from 'react-router';
import './Register.css';
import auth from '../../utils/auth'
import Logo from '../Logo/Logo'

function Register() {
  const [userData, setUserData] = React.useState({})
  const [formValid, setFormValid] = React.useState(false)
  const [nameError, setNameError] = React.useState('')
  const [emailError, setEmailError] = React.useState('')
  const [passwordError, setPasswordError] = React.useState('')
  const history = useHistory()

  React.useEffect(() => {
    if (nameError || emailError || passwordError) {
      return setFormValid(false)
    }
    setFormValid(true)
  }, [nameError, emailError, passwordError])

  const validityInput = input => {
    if (!input.checkValidity()) {
      switch (input.name) {
        case 'name':
          setNameError(input.validationMessage);
          break;
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
      case 'name':
        setNameError('');
        break;
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
    auth.register(userData)
      .then(data => {
        history.push('/sign-up')
      })
      .catch(err => {
        err.then(error => alert(`Ошибка! ${error.message}`))
      })
      .finally(() => {
        e.target.reset()
      })
  }

  return (
    <div className="register">
      <Logo />
      <h1 className="register__greeting">Добро пожаловать!</h1>
      <form className="register__form" onSubmit={handleSubmit}>
        <div className="register__field">
          <p className="register__input-title">Имя</p>
          <input type="text" className="register__input" name="name" value={userData.name || ''} onChange={handleChange} minlength="3" maxlength="30" required/>
          {nameError ? (<span className="register__input-error">{nameError}</span>) : ''}
        </div>
        <div className="register__field">
          <p className="register__input-title">E-mail</p>
          <input type="email" className="register__input" name="email" value={userData.email || ''} onChange={handleChange} required/>
          {emailError ? (<span className="register__input-error">{emailError}</span>) : ''}
        </div>
        <div className="register__field">
          <p className="register__input-title">Пароль</p>
          <input type="password" className="register__input register__input_status_error" name="password" value={userData.password || ''} onChange={handleChange} required/>
          {passwordError ? (<span className="register__input-error">{passwordError}</span>) : ''}
        </div>
        <button className="register__submit" disabled={!formValid}>Зарегистрироваться</button>
        <p className="register__text">Уже зарегистрированы? <a href="/sign-in" className="register__link">Войти</a></p>
      </form>
    </div>
    );
}

export default Register;
