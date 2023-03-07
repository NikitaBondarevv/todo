import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { App } from '../app'
import { store } from 'store'

jest.mock('components/header', () => ({
  Header: () => <header data-testid="header" />
}))

jest.mock('pages', () => ({
  Pages: () => <main />
}))

jest.mock('contracts/checkUser', () => ({
  checkUser: () => ({})
}))


describe('<App />', () => {
  test('should render header and main', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
