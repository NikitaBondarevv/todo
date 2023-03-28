import { render } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Header } from '..'
import { customRender } from '__mocks__/customRender'
import styles from './styles.css'

const mockStore = configureStore([])

describe('<Header />', () => {
  test('should match snapshot', () => {
    const { asFragment } = customRender(<Header />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('should render <AuthorizedUser /> if "isAuthenticated" true', () => {
    const initialState = { user: { isAuthenticated: true } }
    const store = mockStore(initialState)
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    )
    const authorizedUserElement = container.querySelector(`.${styles.menu}`)

    expect(authorizedUserElement).toBeInTheDocument()
  })
})
