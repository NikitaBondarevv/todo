import { render } from '@testing-library/react'
import { Tab } from '../tab'

describe('<Tab />', () => {
  test('should match snapshot', () => {
    const { asFragment } = render(<Tab key={0} title="" />)

    expect(asFragment()).toMatchSnapshot()
  })
})
