import { render } from '@testing-library/react'

import { Tabs } from '..'

describe('<Tabs />', () => {
  test('should match snapshot', () => {
    const { asFragment } = render(<Tabs children={[]} loading={false} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
