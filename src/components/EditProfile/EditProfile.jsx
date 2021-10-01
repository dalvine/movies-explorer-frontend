import React from 'react';
import './EditProfile.css';

function EditProfile() {
  return (
    <div className="edit-profile">
      <h1 className="edit-profile__greeting">Редактирование профиля</h1>
      <form className="edit-profile__form">
        <div className="edit-profile__field">
          <p className="edit-profile__input-title">Имя</p>
          <input type="text" className="edit-profile__input" />
          <span className="edit-profile__input-error"></span>
        </div>
        <div className="edit-profile__field">
          <p className="edit-profile__input-title">E-mail</p>
          <input type="email" className="edit-profile__input" />
          <span className="edit-profile__input-error"></span>
        </div>
        <button className="edit-profile__submit">Сохранить</button>
      </form>
    </div>
  );
}

export default EditProfile;
