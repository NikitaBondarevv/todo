import { customRender } from '__mocks__/customRender'
import { AuthorizedUser } from '..'

describe('<AuthorizedUser />', () => {
  test('should match snapshot', () => {
    const { asFragment } = customRender(<AuthorizedUser />)

    expect(asFragment()).toMatchSnapshot()
  })
})
