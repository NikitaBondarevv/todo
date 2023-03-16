import { screen, waitFor } from '@testing-library/react'

import { customRender } from '__mocks__/customRender'
import { Tasks } from '..'

jest.mock('components/tabs', () => ({
  Tabs: ({ loading }: { loading: boolean }) => <div>{ loading && 'loading' }</div>
}))

jest.mock('contracts/getTasks', () => ({
  getTasks: () => []
}))

describe('<Tasks />', () => {
  test('should render "loading" if passed prop "loading" equals to true', async () => {
    customRender(<Tasks />)

    expect(screen.getByText('loading')).toBeInTheDocument()

    await waitFor(() => {})
  })

  test('should render nothing if "loading" equals to false', async () => {
    customRender(<Tasks />)

    await waitFor(() => {})

    expect(screen.queryByText('loading')).not.toBeInTheDocument()

    await waitFor(() => {})
  })
})
