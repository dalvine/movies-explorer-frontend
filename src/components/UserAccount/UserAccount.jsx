import React from "react";
import logoAccount from '../../images/logo-account.svg'

function UserAccount() {
  return (
    <div className="user-account">
      <p className="user-account__text">Аккаунт</p>
      <img className ="user-account__logo" src={logoAccount} alt="Лого аккаунта" />
    </div>
  )
}

export default UserAccount