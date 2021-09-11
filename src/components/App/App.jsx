import React from 'react';
import './App.css';
import Header from '../Header/Header'

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
    </div>
  );
}

export default App;
