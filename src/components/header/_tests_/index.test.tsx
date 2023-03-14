import { render } from '@testing-library/react'

import { Header } from '..'

jest.mock('components/header', () => ({
  Header: () => <header />
}))

describe('<Header />', () => {
  test('should render header', () => {
    const { asFragment } = render(
      <Header />
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
