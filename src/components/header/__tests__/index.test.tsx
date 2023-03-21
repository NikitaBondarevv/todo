import { customRender } from '__mocks__/customRender'
import { Header } from '..'

describe('<Header />', () => {
  test('should match snapshot', () => {
    const { asFragment } = customRender(<Header />)

    expect(asFragment()).toMatchSnapshot()
  })
})
