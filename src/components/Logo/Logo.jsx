import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'


function Logo() {
  return (
    <Link classname='logo__link' to="/" >
      <img className='logo' src={logo} alt='Логотип' /> 
    </Link>
  );
}

export default Logo;
