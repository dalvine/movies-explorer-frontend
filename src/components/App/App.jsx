import React from 'react';
import './App.css';
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer'

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false)

  const LogIn = () => {
    setLoggedIn(true)
  }

  const logOut = () => {
    setLoggedIn(false)
  }

  return (
    <div className="app">
      <Header loggedIn={loggedIn}/>
      <SearchForm />
      <Movies />
      <Footer />
    </div>
  );
}

export default App;
