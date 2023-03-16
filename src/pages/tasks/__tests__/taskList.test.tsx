import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { TaskList } from '../taskList'

describe('<TaskList />', () => {
  test('should match snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <TaskList tasks={[{ title: 'test', day: '0', id: '0', done: false }]} getTasks={() => { }} activeTabIndex={0} />
      </BrowserRouter>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
