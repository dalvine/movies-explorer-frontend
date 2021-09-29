import React from 'react';
import './Profile.css';
import {useHistory } from 'react-router-dom';

function Profile({name, email}) {
  const history = useHistory()
  return (
    <div className="profile">
      <h1 className="profile__greeting">Привет, {name ? 'name' : 'Владислав'}!</h1>
      <div className="profile__information">
        <div className="profile__item">
          <p className="profile__category">Имя</p>
          <p className="profile__value">{name ? 'name' : 'Владислав'}</p>
        </div>
        <div className="profile__item">
          <p p className="profile__category">E-mail</p>
          <p className="profile__value">{email ? 'name' : 'pochta@yandex.ru'}</p>
        </div>
      </div>
      <div className="profile__control">
        <button className="profile__edit" onClick={() => history.push('/edit-profile')}>Редактировать</button>
        <button className="profile__exit" onClick={() => history.push('/sign-up')}>Выйти из аккаунта</button>
      </div>
    </div>
  );
}

export default Profile;
