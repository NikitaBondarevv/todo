import { fireEvent, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { CreateUser } from '..'
import { createUser } from 'contracts/user'
import styles from 'components/userForm/styles.css'

jest.mock('contracts/user', () => ({
  createUser: jest.fn()
}))

describe('<CreateUser />', () => {
  test('should match snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <CreateUser />
      </BrowserRouter>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  test('should call createUser', () => {
    const fakeUser = {
      firstName: 'test-firstName',
      lastName: 'test-lastName',
      email: 'test@gmail.com',
      password: 'test-password',
      passwordRepeat: 'test-password'
    }
    const { container } = render(
      <BrowserRouter>
        <CreateUser />
      </BrowserRouter>
    )

    const form = container.querySelector(`.${styles.loginForm}`)
    const inputEmail = container.querySelector('[data-test="email"]')
    const inputFirstName = container.querySelector('[data-test="firstName"]')
    const inputLastName = container.querySelector('[data-test="lastName"]')
    const inputPassword = container.querySelector('[data-test="password"]')
    const inputPasswordRepeat = container.querySelector('[data-test="passwordRepeat"]')

    fireEvent.change(inputEmail!, { target: { value: fakeUser.email } })
    fireEvent.change(inputFirstName!, { target: { value: fakeUser.firstName } })
    fireEvent.change(inputLastName!, { target: { value: fakeUser.lastName } })
    fireEvent.change(inputPassword!, { target: { value: fakeUser.password } })
    fireEvent.change(inputPasswordRepeat!, { target: { value: fakeUser.passwordRepeat } })

    fireEvent.submit(form!)

    expect(createUser).toHaveBeenCalledWith(fakeUser)
  })
})
