import React from 'react'
import './PopupWithStatus.css'
import ImageStatusTrue from '../../images/status-modal-true.svg'
import ImageStatusFalse from '../../images/status-modal-false.svg'


function PopupWithStatus({ onClose, isOpen, errorMessage, successMessage, statusModal }) {
  return (
    <section
      className={`popup ${isOpen ? "popup_opened" : null}`
      }>
      <div className="popup__container">
        <div className="status-modal">
          <img className="status-modal__img" src={statusModal ? ImageStatusTrue : ImageStatusFalse} alt={statusModal ? "Запрос прошел успешно" : "Что-то пошло не так"} />
          <p className="status-modal__text">{statusModal ? successMessage : errorMessage}</p>
        </div>
        <button
          type="button"
          className={`popup__close`}
          onClick={onClose}></button>
      </div>
    </section>
  )
}

export default PopupWithStatus