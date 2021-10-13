import React from 'react';
import './EditProfile.css';
import PopupWithStatus from '../PopupWithStatus/PopupWithStatus'
import MainApi from '../../utils/MainApi'
import CurrentUserContext from '../../contexts/CurrentUserContext'
import { useHistory } from 'react-router-dom';

function EditProfile() {
  const [currentUser, setСurrentUser] = React.useContext(CurrentUserContext)
  const [userData, setUserData] = React.useState({})
  const [formValid, setFormValid] = React.useState(false)
  const [emailError, setEmailError] = React.useState('')
  const [nameError, setNameError] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const [isSuccessResponse, setIsSuccessResponse] = React.useState(false)
  const [openModalResultEdit, setOpenModalResultEdit] = React.useState(false)
  const [errorEditMeesage, setErrorEditMeesage] = React.useState('')

  const history = useHistory()

  React.useEffect(() => {
    if (emailError || nameError) {
      return setFormValid(false)
    }
    setFormValid(true)
  }, [emailError, nameError] 
  )

  React.useEffect(() => {
    if (!(userData.name && userData.email)) setFormValid(false)
  }, [userData.name, userData.email])

  const validityInput = input => {
    if (!input.checkValidity()) {
      switch (input.name) {
        case 'email':
          setEmailError(input.validationMessage);
          break;
        case 'name':
          setNameError(input.validationMessage);
          break;
        default:
          return;
      }
      return
    }
    
    if (input.value === currentUser[input.name]) {
      console.log(`Проверка ${input.value} и ${currentUser[input.name]}`);
      switch (input.name) {
        case 'email':
          setEmailError('Веденные данные не должны совпадать с текущими');
          break;
        case 'name':
          setNameError('Веденные данные не должны совпадать с текущими');
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
      case 'name':
        setNameError('');
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
    setIsLoading(true)
    MainApi.editUserInfo(userData)
      .then(data => {
        setСurrentUser(data)
        setIsSuccessResponse(true)
      })
      .catch((err) => {
        err.then( (err) => setErrorEditMeesage(`Ошибка. ${err.message}`) )
        setIsSuccessResponse(false)
        setUserData({})
      })
      .finally(() => {
        e.target.reset()
        setOpenModalResultEdit(true)
        setIsLoading(false)
      })
  }

  const onCloseModalResultEdit = () => {
    setOpenModalResultEdit(false)
    if(isSuccessResponse) history.push('/profile')
  }

  return (
    <>
      <div className="edit-profile">
        <h1 className="edit-profile__greeting">Редактирование профиля</h1>
        <form className="edit-profile__form"  onSubmit={handleSubmit}>
          <div className="edit-profile__field">
            <p className="edit-profile__input-title">Имя</p>
            <input type="text"  className={`edit-profile__input ${nameError ? "edit-profile__input_status_error" : ""}`}  name="name" value={userData.name || ''} onChange={handleChange} />
            { nameError ? <span className="edit-profile__input-error">{nameError}</span> : '' }
          </div>
          <div className="edit-profile__field">
            <p className="edit-profile__input-title">E-mail</p>
            <input type="email" className={`edit-profile__input ${emailError ? "edit-profile__input_status_error" : ""}`}  name="email" value={userData.email || ''} onChange={handleChange} />
            { emailError ? <span className="edit-profile__input-error">{emailError}</span> : '' }
          </div>
          <button className="edit-profile__submit" disabled={!formValid}>{isLoading ? 'Сохранение' :`Сохранить`}</button>
        </form>
      </div>
       <PopupWithStatus statusModal={isSuccessResponse} isOpen={openModalResultEdit} errorMessage={errorEditMeesage} successMessage='Данные успешно изменены!' onClose={onCloseModalResultEdit} />
    </>
  );
}

export default EditProfile;
