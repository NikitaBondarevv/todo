import { fireEvent } from '@testing-library/react'
import { customRender } from '__mocks__/customRender'

import { Profile } from '..'
import styles from 'components/userForm/styles.css'
import { updateUser } from 'contracts/user'
import { fakeUser } from '__mocks__/entities/user.mock'

jest.mock('contracts/user', () => ({
  updateUser: jest.fn()
}))

describe('<Profile />', () => {
  test('should match snapshot', () => {
    const { asFragment } = customRender(<Profile />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('should disable email field', () => {
    const { container } = customRender(<Profile />)
    const inputEmail = container.querySelector('[data-test="email"]')

    expect(inputEmail!.getAttribute('disabled')).not.toBe(null)
  })

  test('should call updateUser', () => {
    const { container } = customRender(<Profile />)
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

    expect(updateUser).toHaveBeenCalledWith(fakeUser)
  })
})

