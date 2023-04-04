import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { CreateUser } from '..'
import { createUser } from 'contracts/user'
import { fakeUser } from '__mocks__/entities/user.mock'

jest.mock('contracts/user', () => ({
  createUser: jest.fn()
}))

jest.mock('components/userForm', () => ({
  UserForm: jest.fn().mockReturnValue('UserForm')
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

  test('should call createUser onSubmit()', () => {
    const userModule = jest.requireMock<{ UserForm: jest.Mock }>('components/userForm')

    userModule.UserForm.mockImplementation(
      ({ onSubmit }: { onSubmit: (data: unknown) => void }) => <button onClick={() => onSubmit(fakeUser)} />
    )
    render(
      <BrowserRouter>
        <CreateUser />
      </BrowserRouter>
    )

    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(createUser).toHaveBeenCalledWith(fakeUser)
  })
})
