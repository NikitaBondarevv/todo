import { render, screen } from '@testing-library/react'
import { IUser } from 'interfaces/IUser'

import { user } from '__mocks__/entities/user.mock'
import { UserForm } from '..'
import { TUserForm } from '../types'

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
})