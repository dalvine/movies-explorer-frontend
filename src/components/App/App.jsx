import React from 'react';
import './App.css';
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Favicon from 'react-favicon'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from '../Header/Header'
import Movies from '../Movies/Movies';
import Main from '../Main/Main'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Profile from '../Profile/Profile'
import SavedMovies from '../SavedMovies/SavedMovies'
import EditProfile from '../EditProfile/EditProfile'
import urlIcon from '../../images/icon.ico'
import NotFound from '../NotFound/NotFound'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import CurrentUserContext from '../../contexts/CurrentUserContext'

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true)
  const [currentUser, setСurrentUser] = React.useState({})
  const [isLoading, setIsLoading] = React.useState(false)

  return (
    <HelmetProvider>
      <CurrentUserContext.Provider value={currentUser}>
        <Helmet>
        <title>Сервис поиска фильмов</title>
        </Helmet>
        <div className="app">
          <Favicon url={urlIcon}/>
          <Header loggedIn={loggedIn}/>
              <Switch>
                <Route loggedIn={loggedIn} path="/" component={Main} exact />
                <Route path="/sign-in">
                  {loggedIn ? <Redirect to='/' /> : <Login setLoggedIn={setLoggedIn}/>}
                </Route>
                <Route path="/sign-up">
                  {loggedIn ? <Redirect to='/' /> : <Register />}
                </Route>
                <ProtectedRoute loggedIn={loggedIn} path="/movies" component={Movies} />
                <ProtectedRoute loggedIn={loggedIn} path="/saved-movies" component={SavedMovies} />
                <ProtectedRoute loggedIn={loggedIn} path="/profile" component={Profile} />
                <Route path='/edit-profile'>
                  <EditProfile />
                </Route>
                <Route path="*" component={NotFound} />
              </Switch>
        </div>
      </CurrentUserContext.Provider>
    </HelmetProvider>
    );
}

export default App;
