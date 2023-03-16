import { render } from '@testing-library/react'

import { Tabs } from '..'

jest.mock('components/preloader', () => ({
  Preloader: ({ loading }: { loading: boolean }) => <div>{ loading && 'loading' }</div>
}))

describe('<Tabs />', () => {
  test('should match snapshot', () => {
    const { asFragment } = render(<Tabs children={[]} loading={false} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
