import { waitFor } from '@testing-library/react'

import { customRender } from '../__mocks__/customRender'
import { App } from '../app'
import { checkUser } from 'contracts/checkUser'
import { login } from 'store/user'

jest.mock('components/header', () => ({
  Header: () => <header data-testid="header" />
}))

jest.mock('pages', () => ({
  Pages: () => <main />
}))

jest.mock('contracts/checkUser', () => ({
  checkUser: jest.fn().mockReturnValue({})
}))

jest.mock('store/user', () => ({
  login: jest.fn().mockReturnValue({ type: 'login '})
}))

describe('<App />', () => {
  const checkUserMock = checkUser as jest.Mock
  const loginMock = login as unknown as jest.Mock

  beforeEach(() => {
    jest.resetAllMocks()
    checkUserMock.mockReturnValue({})
    loginMock.mockReturnValue({ type: 'login '})
  })

  test('should match snapshot', () => {
    const { asFragment } = customRender(<App />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('should call checkUser() on mount', () => {
    customRender(<App />)

    expect(checkUser).toHaveBeenCalled()
  })

  test('should call login() if there is no error', async () => {
    const data = { data: '' }
    checkUserMock.mockReturnValueOnce(data)
    customRender(<App />)

    await waitFor(() => undefined)

    expect(login).toHaveBeenCalledWith(data)
  })

  test('should not call login() if there is an error', async () => {
    const data = { error: 'test error' }
    checkUserMock.mockReturnValueOnce(data)
    customRender(<App />)

    await waitFor(() => undefined)

    expect(login).not.toHaveBeenCalled()
  })
})
