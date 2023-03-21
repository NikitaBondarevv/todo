import { act, fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { task } from '__mocks__/entities/task.mock'
import { Task } from '../task'
import { TTaskProps } from '../types'
import { deleteTask, updateTask } from 'contracts/tasks'
import styles from '../styles.css'

jest.mock('contracts/tasks', () => ({
  updateTask: jest.fn(),
  deleteTask: jest.fn()
}))

describe('<Task />', () => {
  const defaultProps: TTaskProps = {
    data: task,
    getTasks: jest.fn()
  }
  const renderWrapper = (props?: Partial<TTaskProps>, container?: HTMLElement) => render(
    <BrowserRouter>
      <Task {...defaultProps} {...props} />
    </BrowserRouter>,
    { container }
  )

  beforeEach(() => {
    jest.resetAllMocks()
  })

  test('should match snapshot', () => {
    const { asFragment } = renderWrapper()

    expect(asFragment()).toMatchSnapshot()
  })

  test('should call updateTask() when click completeTask button', async () => {
    renderWrapper()
    const buttons = screen.getAllByRole('button')

    await act(() => fireEvent.click(buttons.at(0)!))

    expect(updateTask).toHaveBeenCalledWith({ ...task, done: true })
    expect(defaultProps.getTasks).toHaveBeenCalled()
  })

  test('should call updateTask() when click setInProgress button', async () => {
    const container = document.createElement('div')
    renderWrapper({ data: { ...task, done: false } }, container)
    const button = container.querySelector(`.${styles.inProgress}`)

    await act(() => fireEvent.click(button!))

    expect(updateTask).toHaveBeenCalledWith({ ...task, done: undefined })
    expect(defaultProps.getTasks).toHaveBeenCalled()
  })

  test('should call deleteTask() when click removeTask button', async () => {
    renderWrapper()
    const buttons = screen.getAllByRole('button')

    await act(() => fireEvent.click(buttons.at(2)!))

    expect(deleteTask).toHaveBeenCalledWith(task)
    expect(defaultProps.getTasks).toHaveBeenCalled()
  })
})
