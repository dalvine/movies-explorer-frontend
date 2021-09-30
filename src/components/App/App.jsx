import React from 'react';
import './App.css';
import { Helmet } from "react-helmet"
import Favicon from 'react-favicon'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Profile from '../Profile/Profile'
import SavedMovies from '../SavedMovies/SavedMovies'
import EditProfile from '../EditProfile/EditProfile'
import urlIcon from '../../images/icon.ico'
import NotFound from '../NotFound/NotFound'

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false)

  return (
    <div className="app">
      <Helmet title="Сервис поиска фильмов" />
      <Favicon url={urlIcon}/>
        <Switch>
          <Route path="/" exact>
            <Header loggedIn={loggedIn}/>
            <Main />
            <Footer />
          </Route>
          <Route path="/sign-in">
            {loggedIn ? <Redirect to='/' /> : <Login setLoggedIn={setLoggedIn}/>}
          </Route>
          <Route path="/sign-up">
            {loggedIn ? <Redirect to='/' /> : <Register />}
          </Route>
          <Route path="/movies">
            <Header loggedIn={loggedIn}/>
            <SearchForm />
            <Movies />
            <Footer />
          </Route>
          <Route path="/saved-movies">
            <Header loggedIn={loggedIn}/>
            <SearchForm />
            <SavedMovies /> 
            <Footer />
          </Route>
          <Route path="/profile">
            <Header loggedIn={loggedIn}/>
            <Profile />
          </Route>
          <Route path='/edit-profile'>
            <Header loggedIn={loggedIn}/>
            <EditProfile />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
    </div>
    );
}

export default App;
