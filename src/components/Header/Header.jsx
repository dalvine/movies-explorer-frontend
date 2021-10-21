import React from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo' 
import UserAccount from '../UserAccount/UserAccount'
import Navigation from '../Navigation/Navigation'
import LoginPanel from '../LoginPanel/LoginPanel'
import { listRouteWithHideHeader } from '../../utils/utils'


function Header({ loggedIn }) {
  const location = useLocation()

  const isHideHeader = () => listRouteWithHideHeader.some(route => route === location.pathname)

  const [isOpenedMenu, setIsOpenedMenu] = React.useState(false)

  const handleOpenedMenu = () => {
    setIsOpenedMenu(!isOpenedMenu)
  }

  return (
    <header className={`header ${loggedIn ? '' : 'header_theme_dark'} ${isHideHeader() ? 'header_hide' : ''}`}>
      <Logo />
      {loggedIn ? 
      <>
        <Navigation handleOpenedMenu={handleOpenedMenu} isOpenedMenu={isOpenedMenu}/>
        <UserAccount isOpenedMenu={isOpenedMenu}/>
      </>
      :
      <LoginPanel />
      }

    </header>
  );
}

export default Header;
