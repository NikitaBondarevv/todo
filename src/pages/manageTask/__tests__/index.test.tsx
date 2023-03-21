import { fireEvent, screen, act } from '@testing-library/react'
import { createTask, updateTask } from 'contracts/tasks'

import { customRender } from '__mocks__/customRender'
import { ManageTask } from '..'
import styles from '../styles.css'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    day: '1',
    id: '1'
  })
}))

jest.mock('contracts/tasks', () => ({
  createTask: jest.fn(),
  getTaskById: () => ({
    title: 'test',
    description: 'test',
    id: '1',
    day: '1'
  }),
  updateTask: jest.fn()
}))

describe('<ManageTask />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  const testText = 'test'

  test('should match snapshot', () => {
    const { asFragment } = customRender(<ManageTask />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('should fire onChange() on input and should be set to text "test"', async () => {
    const { container } = customRender(<ManageTask />)
    const input = container.querySelector(`.${styles.title}`)

   await act(() => fireEvent.change(input!, { target: { value: testText } }))
    expect(screen.getByDisplayValue(testText)).not.toBe('')
  })

  test('should fire onChange() on textarea and should be set to text "test"', async () => {
    const { container } = customRender(<ManageTask />)
    const textarea = container.querySelector(`.${styles.description}`)

    await act(() => fireEvent.change(textarea!, { target: { value: testText } }))

    expect(screen.getByDisplayValue(testText)).not.toBe('')
  })

  test('should not fire createTask() in the onSubmit event if the length of the value is less than 2', async () => {
    const { container } = customRender(<ManageTask />)
    const form = container.querySelector(`.${styles.updateCreateTask}`)
    const input = container.querySelector(`.${styles.title}`)

    fireEvent.change(input!, { target: { value: 'a' } })
    await act(() => fireEvent.submit(form!))

    expect(createTask).not.toHaveBeenCalled()
  })

  test('should fire createTask() if id is not present', async () => {
    const { container } = customRender(<ManageTask />)
    const form = container.querySelector(`.${styles.updateCreateTask}`)

    await act(() => fireEvent.submit(form!))

    expect(createTask).toHaveBeenCalled()
  })

  test('should fire createTask() if id is present', async () => {
    const { container } = customRender(<ManageTask />)
    const form = container.querySelector(`.${styles.updateCreateTask}`)

    await act(() => fireEvent.submit(form!))

    expect(updateTask).toHaveBeenCalled()
  })
})
