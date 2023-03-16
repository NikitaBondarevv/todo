import { screen, act } from '@testing-library/react'
import { store } from 'store'

import { customRender } from '__mocks__/customRender'
import { TasksInfo } from '..'
import { login } from 'store/user'
import { IUser } from 'interfaces/IUser'

describe('<TasksInfo />', () => {
  test('should render "Hello," if there is no user data', async () => {
    await act(() => {
      customRender(<TasksInfo />)
    })

    expect(screen.getByText('Hello,')).toBeInTheDocument()
  })

  test('should render firstName if user exists', async () => {
    const firstName = 'test name'
    store.dispatch(login({ firstName } as IUser))

    await act(() => {
      customRender(<TasksInfo />)
    })

    expect(screen.getByText(`Hello, ${firstName}`)).toBeInTheDocument()
  })
})
