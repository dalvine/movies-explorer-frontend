import React from "react";
import './UserAccount.css'
import { Link } from "react-router-dom";
import logoAccount from '../../images/logo-account.svg'

function UserAccount({isOpenedMenu}) {
  return (
    <Link to="/profile" className={`user-account ${isOpenedMenu ? 'user-account_active' : ''}`}>
      <p className="user-account__text">Аккаунт</p>
      <img className ="user-account__logo" src={logoAccount} alt="Лого аккаунта" />
    </Link>
  )
}

export default UserAccount