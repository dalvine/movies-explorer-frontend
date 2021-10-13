import React from 'react';
import './Profile.css';
import {useHistory } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext'

function Profile({ setLoggedIn }) {
  const history = useHistory()

  const [currentUser] = React.useContext(CurrentUserContext)
  const {name, email} = currentUser

  const signOut = () => {
    setLoggedIn(false)
    localStorage.clear()
  }

  return (
    <div className="profile">
      <h1 className="profile__greeting">Привет, {name}!</h1>
      <div className="profile__information">
        <div className="profile__item">
          <p className="profile__category">Имя</p>
          <p className="profile__value">{name}</p>
        </div>
        <div className="profile__item">
          <p className="profile__category">E-mail</p>
          <p className="profile__value">{email}</p>
        </div>
      </div>
      <div className="profile__control">
        <button className="profile__edit" onClick={() => history.push('/edit-profile')}>Редактировать</button>
        <button className="profile__exit" onClick={signOut}>Выйти из аккаунта</button>
      </div>
    </div>
  );
}

export default Profile;
