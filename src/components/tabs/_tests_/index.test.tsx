import { render } from '@testing-library/react'

import { Tabs } from '..'
import { Navigation } from '../navigation'

jest.mock('components/tabs', () => ({
  Tabs: () => <div />
}))

jest.mock('components/tabs/navigation', () => ({
  Navigation: () => <nav />
}))

describe('<Tabs />, <Navigation />', () => {
  test('should render div', () => {
    const { asFragment } = render(
      <Tabs />
    )

    expect(asFragment()).toMatchSnapshot()
  })

  test('should render nav', () => {
    const { asFragment } = render(
      <Navigation />
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
