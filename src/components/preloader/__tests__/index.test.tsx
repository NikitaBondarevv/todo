import { render } from '@testing-library/react'

import { Preloader } from '..'

describe('<Preloader />', () => {
  test('should render <div />', () => {
    render(<Preloader />)
  })
})
