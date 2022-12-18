const makeRequest = async (url, data, method = 'GET') => {
  const options = {
    method,
    credentials: 'include'
  }

  if (data) {
    Object.assign(options, {
      headers: {
        'Content-type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data)
    })
  }

  const response = await fetch(`http://localhost:8086/${url}`, options)

  return response.json()
}

export const request = {
  get(url) {
    return makeRequest(url)
  },

  post(url, data) {
    return makeRequest(url, data, 'POST')
  },

  put(url, data) {
    return makeRequest(url, data, 'PUT')
  },

  delete(url) {
    return makeRequest(url, undefined, 'DELETE')
  }
}
