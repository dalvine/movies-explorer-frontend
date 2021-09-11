import './Header.css';
import Logo from '../Logo/Logo' 
import UserAccount from '../UserAccount/UserAccount'
import Navigation from '../Navigation/Navigation'


function Header() {
  return (
    <header className="header">
      <Logo />
      <Navigation />
      <UserAccount />
    </header>
  );
}

export default Header;
