class MoviesApi {
  constructor(options) {
    this._url = options.baseUrl
    this._headers = options.headers
  }

  getMovies() {
    return fetch(`${this._url}`, {
      "method": "GET",
      "headers": this._headers
    })
      .then(this._checkResponse)
  }

  _checkResponse(res) {
    if (res.ok) return res.json()
    return Promise.reject(res.json())
  }
}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default moviesApi