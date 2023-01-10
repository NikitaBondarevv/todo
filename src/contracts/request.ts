import { IData } from 'interfaces/IData'
import { IUser } from 'interfaces/IUser'

const makeRequest = async (url: string, data?: IData | IUser, method: string = 'GET') => {
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

  const response = await fetch(`http://localhost:8086/${url}`, <RequestInit> options)

  return response.json()
}

export const request = {
  get(url: string) {
    return makeRequest(url, undefined)
  },

  post(url: string, data: IData | IUser) {
    return makeRequest(url, data, 'POST')
  },

  put(url: string, data: IData | IUser) {
    return makeRequest(url, data, 'PUT')
  },

  delete(url: string) {
    return makeRequest(url, undefined, 'DELETE')
  }
}
