import { render } from '@testing-library/react'

import { Preloader } from '..'

describe('<Preloader />', () => {
  test('should match snapshot', () => {
    const { asFragment } = render(<Preloader />)

    expect(asFragment()).toMatchSnapshot()
  })
})
