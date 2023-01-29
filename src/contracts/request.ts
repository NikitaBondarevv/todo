const makeRequest = async <T>(url: string, data?: T, method: string = 'GET') => {
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

  try {
    const response = await fetch(`http://localhost:8086/${url}`, <RequestInit>options)

    return response.json()
  } catch (error) {
    alert(String(error))

    throw new Error(error)
  }
}

export const request = {
  get(url: string) {
    return makeRequest(url, undefined)
  },

  post<T>(url: string, data: T) {
    return makeRequest(url, data, 'POST')
  },

  put<T>(url: string, data: T) {
    return makeRequest(url, data, 'PUT')
  },

  delete(url: string) {
    return makeRequest(url, undefined, 'DELETE')
  }
}
