class MainApi {
  constructor(options) {
    this._baseUrl = this._url = options.baseUrl
    this._headers = options.headers
  }

  addMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(this._checkResponse)
  }

  removeMovie(data) {
    return fetch(`${this._baseUrl}/movies/${data._id}`, {
      method: 'DELETE',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(this._checkResponse)
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  register({ name, password, email }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "password": password,
        "email": email,
        "name": name,
      })
    })
      .then(this._checkResponse)
  }

  authorization({ password, email }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "password": password,
        "email": email
      })
    })
      .then(this._checkResponse)
  }

  editUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      "method": "PATCH",
      "headers": this._headers,
      "body": JSON.stringify({
        "name": data.name,
        "email": data.email,
      })
    })
      .then(this._checkResponse)
  }

  getToken(JWT) {
    return fetch(`${this._baseUrl}/users/me`, {
      "method": 'GET',
      "headers": {
        "Content-Type": "application/json",
        "authorization": `Bearer ${JWT}`
      }
    })
      .then(this._checkResponse)
  }

  addTokenToHeaders(token) {
    if (token) {
      this._headers['authorization'] = `Bearer ${token}`
    } else {
      this._headers['authorization'] = null
    }
  }

  _checkResponse(res) {
    if (res.ok) return res.json()
    return Promise.reject(res.json())
  }
}

export default new MainApi({
  baseUrl: 'https://api.film-curator.nomoredomains.club',
  headers: {
    'Content-Type': 'application/json'
  }
})