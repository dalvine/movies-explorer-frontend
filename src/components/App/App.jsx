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
import MainApi from '../../utils/MainApi'
import CurrentUserContext from '../../contexts/CurrentUserContext'
import Preloader from '../Preloader/Preloader';
import moviesApi from '../../utils/MoviesApi'

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [currentUser, setСurrentUser] = React.useState(CurrentUserContext)
  const [isLoading, setIsLoading] = React.useState(true)

  // React.useEffect(() => {
  //   function checkAuthorization() {
  //     const token = localStorage.getItem('token')
  //     if (token) {
  //       setIsLoading(true)
  //       MainApi.getToken(token)
  //         .then(data => {
  //           MainApi.addTokenToHeaders(token)
  //           setСurrentUser(data)
  //           setLoggedIn(true)
  //           setIsLoading(false)
  //         })
  //         .catch((err) => {
  //           localStorage.removeItem('token')
  //           setLoggedIn(false)
  //         })
  //     } else {
  //       MainApi.addTokenToHeaders(token)
  //       setIsLoading(false)
  //       setLoggedIn(false)
  //     }
  //   }

  //   checkAuthorization()
  // }, [loggedIn])

  React.useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      setLoggedIn(false)
    } else {
      const movies = localStorage.getItem('movies')
      const user = JSON.parse(localStorage.getItem('user'))
      if (!movies) {
      moviesApi.getMovies()
          .then(movies => {
              localStorage.setItem('movies', JSON.stringify(movies))
              }
          )
      }
      if (!user) {
        MainApi.getToken(token)
        .then(data => {
          MainApi.addTokenToHeaders(token)
          setСurrentUser(data)
          localStorage.setItem('user', JSON.stringify(data))
          setLoggedIn(true)
        })
        .catch((err) => {
          localStorage.clear()
          setLoggedIn(false)
        })
      } else {
        setСurrentUser(user)
      }
      MainApi.addTokenToHeaders(token)
      setLoggedIn(true)
    }
    setIsLoading(false)
  }, [loggedIn])

  


  return (
    <HelmetProvider>
      <CurrentUserContext.Provider value={[currentUser, setСurrentUser]}>
        <Helmet>
        <title>Сервис поиска фильмов</title>
        </Helmet>
        <div className="app">
          <Favicon url={urlIcon}/>
          {isLoading ? <Preloader /> :
          <>
          <Header loggedIn={loggedIn}/>
              <Switch>
                <Route loggedIn={loggedIn} path="/" component={Main} exact />
                <Route path="/sign-in">
                  {loggedIn ? <Redirect to='/' /> : <Login setLoggedIn={setLoggedIn}/>}
                </Route>
                <Route path="/sign-up">
                  {loggedIn ? <Redirect to='/' /> : <Register setLoggedIn={setLoggedIn} />}
                </Route>
                <ProtectedRoute loggedIn={loggedIn} path="/movies" component={Movies} />
                <ProtectedRoute loggedIn={loggedIn} path="/saved-movies" component={SavedMovies} />
                <ProtectedRoute loggedIn={loggedIn} path="/profile" component={Profile} setLoggedIn={setLoggedIn}/>
                <ProtectedRoute loggedIn={loggedIn} path="/edit-profile" component={EditProfile} setСurrentUser={setСurrentUser} />
                <Route path="*" component={NotFound} />
              </Switch>
              </>
          }
        </div>
      </CurrentUserContext.Provider>
    </HelmetProvider>
    );
}

export default App;
