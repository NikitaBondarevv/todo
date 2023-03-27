import { logout } from 'contracts/logout'
import { request } from 'contracts/request'

jest.mock('contracts/request', () => ({
  request: {
    get: jest.fn()
  }
}))

describe('logout', () => {
  test('should return data on request', () => {
    logout()
    expect(request.get).toHaveBeenCalledWith('logout')
  })
})
