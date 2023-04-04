import { act } from '@testing-library/react'
import configureStore from 'redux-mock-store'

import { Header } from '..'
import { customRender } from '__mocks__/customRender'
import styles from './styles.css'
import { login } from 'store/user'
import { store } from 'store'
import { IUser } from 'interfaces/IUser'

describe('<Header />', () => {
  test('should match snapshot', () => {
    const { asFragment } = customRender(<Header />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('should render <AuthorizedUser /> if "isAuthenticated" true', () => {
    const firstName = 'test name'
    store.dispatch(login({ firstName } as IUser))

    const { container } = customRender(<Header />)
    const authorizedUserElement = container.querySelector(`.${styles.menu}`)

    expect(authorizedUserElement).toBeInTheDocument()
  })
})
