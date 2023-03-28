import { act, fireEvent, render } from '@testing-library/react'

import { login } from 'contracts/login'
import { LoginForm } from '..'
import styles from './styles.css'

jest.mock('contracts/login', () => ({
  login: jest.fn().mockReturnValue({
    email: 'test@test.com',
    password: 'test-password'
  })
}))

describe('<LoginForm />', () => {
  const loginMock = login as jest.Mock

  beforeEach(() => {
    jest.resetAllMocks()
    loginMock.mockReturnValue({
      email: 'test@test.com',
      password: 'test-password'
    })
  })

  const setUser = jest.fn()

  test('should match snapshot', () => {
    const { asFragment } = render(<LoginForm setUser={setUser} />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('should called setUser if not error', async () => {
    const { container } = render(<LoginForm setUser={setUser} />)
    const form = container.querySelector(`.${styles.loginForm}`)

    await act(() => fireEvent.submit(form!))

    expect(setUser).toHaveBeenCalled()
  })

  test('should show error window if there is error', async () => {
    const error = { error: 'test-error' }

    loginMock.mockReturnValueOnce(error)

    const { container } = render(<LoginForm setUser={setUser} />)
    const form = container.querySelector(`.${styles.loginForm}`)

    await act(() => fireEvent.submit(form!))

    expect(setUser).not.toHaveBeenCalled()
  })
})
