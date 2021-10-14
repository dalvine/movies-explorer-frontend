import React from 'react';
import { useHistory } from 'react-router';
import './Register.css';
import MainApi from '../../utils/MainApi'
import PopupWithStatus from '../PopupWithStatus/PopupWithStatus'
import Logo from '../Logo/Logo'

function Register({ setLoggedIn }) {
  const [statusReg, setStatusReg] = React.useState(false)
  const [openModalResultRegister, setOpenModalResultRegister] = React.useState(false)
  const [userData, setUserData] = React.useState({})
  const [formValid, setFormValid] = React.useState(true)
  const [nameError, setNameError] = React.useState('')
  const [emailError, setEmailError] = React.useState('')
  const [passwordError, setPasswordError] = React.useState('')
  const [errorRegistrationMeesage, setErrorRegistrationMeesage] = React.useState('')
  const history = useHistory()

  React.useEffect(() => {
    const checkError = () => {
      if (nameError || emailError || passwordError) {
        return setFormValid(false)
      } else {
        setFormValid(true)
      }
    }

    if (!(userData.name && userData.email && userData.password)) {
      setFormValid(false)
    } else {
      checkError()
    }
  }, [userData.name, userData.email, userData.password, nameError, emailError, passwordError])

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
    MainApi.register(userData)
      .then(data => {
        setStatusReg(true)
      })
      .catch(err => {
        err.then(error => setErrorRegistrationMeesage(error.message))
        setStatusReg(false)
      })
      .finally(() => {
        setOpenModalResultRegister(true)
        e.target.reset()
      })
  }

  const onCloseModalResultRegister = () => {
    if (statusReg) { 
      MainApi.authorization(userData)
      .then(data => {
        localStorage.setItem('token', data.token)
        MainApi.addTokenToHeaders(data.token)
        setLoggedIn(true)
        history.push('/movies')
      })
      .catch(err => err.then((err)=>alert(`Ошибка. ${err.message}`)))
    }
    setOpenModalResultRegister(false)
}

  return (
    <>
      <div className="register">
        <Logo />
        <h1 className="register__greeting">Добро пожаловать!</h1>
        <form className="register__form" onSubmit={handleSubmit}>
          <div className="register__field">
            <p className="register__input-title">Имя</p>
            <input type="text" className={`register__input ${nameError ? "register__input_status_error" : ""}`} name="name" value={userData.name || ''} onChange={handleChange} minLength="3" maxLength="30" required/>
            {nameError ? (<span className="register__input-error">{nameError}</span>) : ''}
          </div>
          <div className="register__field">
            <p className="register__input-title">E-mail</p>
            <input type="email" className={`register__input ${emailError ? "register__input_status_error" : ""}`} name="email" value={userData.email || ''} onChange={handleChange} required/>
            {emailError ? (<span className="register__input-error">{emailError}</span>) : ''}
          </div>
          <div className="register__field">
            <p className="register__input-title">Пароль</p>
            <input type="password" className={`register__input ${passwordError ? "register__input_status_error" : ""}`} name="password" value={userData.password || ''} onChange={handleChange} required/>
            {passwordError ? (<span className="register__input-error">{passwordError}</span>) : ''}
          </div>
          <button className="register__submit" disabled={!formValid}>Зарегистрироваться</button>
          <p className="register__text">Уже зарегистрированы? <a href="/sign-in" className="register__link">Войти</a></p>
        </form>
      </div>
      <PopupWithStatus statusModal={statusReg} isOpen={openModalResultRegister} errorMeesage={errorRegistrationMeesage} successMessage='Успешная регистрация' onClose={onCloseModalResultRegister}/>
    </>
    );
}

export default Register;
