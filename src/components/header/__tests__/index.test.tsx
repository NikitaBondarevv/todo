import { customRender } from '__mocks__/customRender'
import { Header } from '..'

jest.mock('./images/logo.png', () => 'logo')

describe('<Header />', () => {
  test('should match snapshot', () => {
    const { asFragment } = customRender(<Header />)

    expect(asFragment()).toMatchSnapshot()
  })
})
