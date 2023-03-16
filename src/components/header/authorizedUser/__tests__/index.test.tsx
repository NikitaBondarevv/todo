import { customRender } from '__mocks__/customRender'
import { AuthorizedUser } from '..'

jest.mock('./images/logo.png', () => 'logo')

describe('<AuthorizedUser />', () => {
  test('should match snapshot', () => {
    const { asFragment } = customRender(<AuthorizedUser />)

    expect(asFragment()).toMatchSnapshot()
  })
})
