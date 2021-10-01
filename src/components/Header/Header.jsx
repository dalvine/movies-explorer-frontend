import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo' 
import UserAccount from '../UserAccount/UserAccount'
import Navigation from '../Navigation/Navigation'
import LoginPanel from '../LoginPanel/LoginPanel'


function Header({ loggedIn }) {

  const [isOpenedMenu, setIsOpenedMenu] = React.useState(false)

  const handleOpenedMenu = () => {
    setIsOpenedMenu(!isOpenedMenu)
  }

  return (
    <header className={`header ${loggedIn ? '' : 'header_theme_dark'}`}>
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
