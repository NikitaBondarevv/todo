import { Header } from '..'
import { customRender } from '__mocks__/customRender'
import { login } from 'store/user'
import { store } from 'store'
import { IUser } from 'interfaces/IUser'

jest.mock('../authorizedUser', () => ({
  AuthorizedUser: () => <div data-test-id="test" />
}))

describe('<Header />', () => {
  test('should match snapshot', () => {
    const { asFragment } = customRender(<Header />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('should render <AuthorizedUser /> if "isAuthenticated" true', () => {
    const firstName = 'test name'
    store.dispatch(login({ firstName } as IUser))

    const { container } = customRender(<Header />)
    const authorizedUserElement = container.querySelector(`[data-test-id=test]`)

    expect(authorizedUserElement).toBeInTheDocument()
  })
})
