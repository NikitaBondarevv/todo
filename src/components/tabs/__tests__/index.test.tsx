import { render } from '@testing-library/react'

import { Tabs } from '..'
import styles from './styles.css'

describe('<Tabs />', () => {
  test('should match snapshot', () => {
    const { asFragment } = render(
    <Tabs loading={false}>
      <div>test</div>
    </Tabs>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  test('should render <Preloader /> if loading = true', () => {
    const { container } = render(<Tabs children={[]} loading />)

    const preloader = container.querySelector(`.${styles.preloader}`)

    expect(preloader).toBeInTheDocument()
  })
})
