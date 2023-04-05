import { screen } from '@testing-library/react'

import { logout } from 'contracts/logout'
import { customRender } from '__mocks__/customRender'
import { Logout } from '..'

jest.mock('contracts/logout', () => ({
  logout: jest.fn()
}))

describe('<Logout />', () => {
  const logoutMock = logout as jest.Mock

  test('should match snapshot', () => {
    const { asFragment } = customRender(<Logout />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('should call logout if don`t error', () => {
    customRender(<Logout />)

    expect(logout).toHaveBeenCalled()
  })

  test('should show error text if "logout" don`t work', async () => {
    const mockError = 'something went wrong, please try later!'

    logoutMock.mockRejectedValueOnce(mockError)
    customRender(<Logout />)

    await logout()

    expect(await screen.findByText(mockError)).toBeInTheDocument()
  })
})
