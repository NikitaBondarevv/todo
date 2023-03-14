import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { Tasks } from '..'
import { Task } from '../task'
import { TaskList } from '../taskList'

jest.mock('contracts/getTasks', () => ({
  getTasks: () => ({})
}))

jest.mock('components/tabs', () => ({
  Tabs:  () => <div />
}))

describe('<Tasks />, <Task />, <TaskList />', () => {
  test('should render div', () => {
    const { asFragment } = render(
      <Tasks />
    )

    expect(asFragment()).toMatchSnapshot()
  })

  test('should render li', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Task />
      </BrowserRouter>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  test('should render div', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <TaskList />
      </BrowserRouter>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
