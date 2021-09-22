import './Header.css';
import Logo from '../Logo/Logo' 
import UserAccount from '../UserAccount/UserAccount'
import Navigation from '../Navigation/Navigation'
import LoginPanel from '../LoginPanel/LoginPanel'


function Header({ loggedIn }) {
  return (
    <header className={`header ${loggedIn || 'header_theme_dark'}`}>
      <Logo />
      {loggedIn ? 
      <>
      <Navigation />
      <UserAccount />
      </>
      :
      <LoginPanel />
      }

    </header>
  );
}

export default Header;
