class Api {
  constructor(options) {
    this._url = options.baseUrl
    this._headers = options.headers
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      "method": "GET",
      "headers": this._headers
    })
      .then(this._checkResponse)
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      "method": "GET",
      "headers": this._headers
    })
      .then(this._checkResponse)
  }

  editUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      "method": "PATCH",
      "headers": this._headers,
      "body": JSON.stringify({
        "name": data.name,
        "about": data.about,
      })
    })
      .then(this._checkResponse)
  }

  addCard(data) {
    return fetch(`${this._url}/cards`, {
      "method": "POST",
      "headers": this._headers,
      "body": JSON.stringify({
        "name": data.name,
        "link": data.link,
      })
    })
      .then(this._checkResponse)
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      "method": "DELETE",
      "headers": this._headers,
    })
      .then(this._checkResponse)
  }

  changeLike(id, isLiked) {
    if (isLiked) {
      return fetch(`${this._url}/cards/${id}/likes`, {
        "method": "PUT",
        "headers": this._headers,
      })
        .then(this._checkResponse)
    } else {
      return fetch(`${this._url}/cards/${id}/likes`, {
        "method": "DELETE",
        "headers": this._headers,
      })
        .then(this._checkResponse)
    }
  }

  _checkResponse(res) {
    if (res.ok) return res.json()
    return Promise.reject(res.json())
  }

  _addTokenToHeaders(token) {
    if (token) {
      this._headers['authorization'] = `Bearer ${token}`
    } else {
      this._headers['authorization'] = null
    }
  }


}

const api = new Api({
  baseUrl: 'https://api.mesto71.nomoredomains.club',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api
