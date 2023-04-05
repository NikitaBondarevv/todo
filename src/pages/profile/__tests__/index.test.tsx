import { fireEvent, screen } from '@testing-library/react'
import { customRender } from '__mocks__/customRender'

import { Profile } from '..'
import { updateUser } from 'contracts/user'
import { fakeUser } from '__mocks__/entities/user.mock'

jest.mock('contracts/user', () => ({
  updateUser: jest.fn()
}))

jest.mock('components/userForm', () => ({
  UserForm: jest.fn().mockReturnValue('UserForm')
}))

describe('<Profile />', () => {
  test('should match snapshot', () => {
    const { asFragment } = customRender(<Profile />)

    expect(asFragment()).toMatchSnapshot()
  })
  
  test('should call updateUser', () => {
    const userModule = jest.requireMock<{ UserForm: jest.Mock }>('components/userForm')

    userModule.UserForm.mockImplementation(
      ({ onSubmit }: { onSubmit: (data: unknown) => void }) => <button onClick={() => onSubmit(fakeUser)} />
    )
    customRender(
      <Profile />
    )

    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(updateUser).toHaveBeenCalledWith(fakeUser)
  })
})

