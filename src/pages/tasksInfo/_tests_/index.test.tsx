import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { TasksInfo } from '..'
import { store } from '../../../store'

jest.mock('contracts/getInfo', () => ({
  getInfo: () => ({})
}))

describe('<TasksInfo />', () => {
  test('should render div', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Provider store={store}>
          <TasksInfo />
        </Provider>
      </BrowserRouter>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
