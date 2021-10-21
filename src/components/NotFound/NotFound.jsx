import React from 'react';
import { useHistory } from 'react-router';
import './NotFound.css';

function NotFound() {
  const history = useHistory()

  return (
    <div className="not-found">
      <p className="not-found__code">404</p>
      <p className="not-found__message">Страница не найдена</p>
      <button className="not-found__back" onClick={() => history.goBack()}>Назад</button>
    </div>
    );
}

export default NotFound;
