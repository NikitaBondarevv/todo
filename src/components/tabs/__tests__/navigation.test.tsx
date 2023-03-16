import { render } from '@testing-library/react'
import { Navigation } from '../navigation'

jest.mock('components/preloader', () => ({
  Preloader: ({ loading }: { loading: boolean }) => <div>{ loading && 'loading' }</div>
}))

describe('<Navigation />', () => {
  test('should match snapshot', () => {
    const { asFragment } = render(<Navigation setActiveTab={() => {}} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
