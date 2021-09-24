import React from 'react';
import './App.css';
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer'
import Promo from '../Promo/Promo'
import AboutProject from '../AboutProject/AboutProject';
import Techs from "../Techs/Techs";
import AboutMe from '../AboutMe/AboutMe'
import Portfolio from '../Portfolio/Portfolio'
import Profile from '../Profile/Profile';
import Register from '../Register/Register'
import Login from '../Login/Login'

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true)

  // const LogIn = () => {
  //   setLoggedIn(true)
  // }

  // const logOut = () => {
  //   setLoggedIn(false)
  // }

  return (
    <div className="app">
      {/* <Header loggedIn={loggedIn}/> */}
      {loggedIn ?
      <>
      {/* <Register /> */}
      <Login />
        {/* <SearchForm />
        <Movies /> */}
      </> : 
      <>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </>}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
