import React from "react";
import { useHistory } from 'react-router-dom'

function LoginPanel() {
  const history = useHistory()
  return (
    <div className="login-panel">
      <button className="login-panel__reg" onClick={() => history.push('/sign-up')}>Регистрация</button>
      <button className="login-panel__login" onClick={() => history.push('/sign-in')}>Войти</button>
    </div>
  )
}

export default LoginPanel