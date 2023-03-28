import { makeRequest } from 'contracts/request'
import { request } from 'contracts/request'

const mockData = { data: 'test' }
const mockResponse = { json: () => mockData } as unknown as Response
const options = {
  credentials: 'include',
  headers: {
    "Content-type": 'application/json; charset=utf-8'
  },
  method: 'GET',
  body: JSON.stringify(mockData)
}

describe('makeRequest', () => {
  test('should return some value', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValueOnce(mockResponse)

    expect(await makeRequest('some')).toEqual(mockData)
  })

  test('should throw an error on failed request', async () => {
    const error = 'test error'

    jest.spyOn(global, 'fetch').mockRejectedValueOnce(error)

    await expect(makeRequest('some')).rejects.toEqual(new Error(error))
  })

  test('should add for options "header and body" if data passed in argument', async () => {
    const fakeFetch = jest.spyOn(global, 'fetch').mockResolvedValueOnce(mockResponse)

    await makeRequest('some', mockData)    

    expect(fakeFetch).toHaveBeenCalledWith('http://localhost:8086/some', options)
  })
})

describe('request', () => {
  test('should return some data on "post()"', async () => {
    jest.spyOn(request, 'post').mockResolvedValueOnce(mockData)

    expect(await request.post('', {})).toEqual(mockData)
  })

  test.each([
    ['post'],
    ['put'],
    ['get'],
    ['delete'],
  ])('should return some data on %s', async (name) => {
    const method = name as keyof typeof request
    jest.spyOn(global, 'fetch').mockResolvedValueOnce(mockResponse)

    expect(await request[method]('', {})).toEqual(mockData)
  })
})
