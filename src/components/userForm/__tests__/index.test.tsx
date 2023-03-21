import { fireEvent, render, screen } from '@testing-library/react'
import { IUser } from 'interfaces/IUser'

import { user } from '__mocks__/entities/user.mock'
import { UserForm } from '..'
import { TUserForm } from '../types'
import styles from '../styles.css'

describe('<UserForm />', () => {
  const defaultProps: TUserForm = {
    disabledFields: [],
    user,
    onSubmit: jest.fn()
  }
  test('should match snapshot', () => {
    const { asFragment } = render(<UserForm {...defaultProps} />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('should enable submit button if all fields are filled', () => {
    const user = {
      ...defaultProps.user,
      passwordRepeat: defaultProps.user?.password
    } as IUser

    render(<UserForm {...defaultProps} user={user} />)

    expect(screen.getByDisplayValue('SAVE').getAttribute('disabled')).toBe(null)
  })

  test('should set value "a" in input and render div with error text', () => {
    const { container } = render(<UserForm {...defaultProps} user={defaultProps.user} />)
    const input = screen.getByDisplayValue('firstName')
        
    fireEvent.change(input, { target: { value: 'a' } })
    fireEvent.blur(input)
    
    expect(container.querySelector(`.${styles.textInfo}`)).toBeInTheDocument()
   })

   test('should not execute onSubmit() if all fields are not filled', () => {
    const { container } = render(<UserForm {...defaultProps} user={user} />)
    const form = container.querySelector(`.${styles.loginForm}`)

    fireEvent.submit(form!)    
    
    expect(defaultProps.onSubmit).not.toHaveBeenCalled()
   })

   test('should work onSubmit form and execute onSubmit()', () => {
    const user = {
      ...defaultProps.user,
      passwordRepeat: defaultProps.user?.password
    } as IUser
    const { container } = render(<UserForm {...defaultProps} user={user} />)
    const form = container.querySelector(`.${styles.loginForm}`)

    fireEvent.submit(form!)    
    
    expect(defaultProps.onSubmit).toHaveBeenCalled()
   })

   test('should show div with error if password and passwordRepeat don`t match', () => {
    const user = {
      ...defaultProps.user,
      passwordRepeat: 'test'
    } as IUser
    const { container } = render(<UserForm {...defaultProps} user={user} />)
    const input = screen.getByDisplayValue('test')

    fireEvent.blur(input)

    expect(container.querySelector(`.${styles.textInfo}`)).toBeInTheDocument()
   })
})
