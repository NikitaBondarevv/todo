import { Component } from 'react'

import { TaskList } from '.'
import { getDate, daysOfTheWeek, month } from '../helpers/constans'
import { Tabs } from '../tabs'
import { Tab } from '../tabs/tab'
import { getTasks } from '../contracts/getTasks'

export class DaysWithTasks extends Component {
  state = {
    days: []
  }

  async getTasks() {
    this.setState({ days: await getTasks() })
  }

  componentDidMount() {
    this.getTasks()
  }

  getDateNow = () => {
    const date = new Date()

    return date.getDay() - 1
  }

  render() {
    const { days } = this.state

    return (
      <Tabs selectedIndex={this.getDateNow()}>
        {
          days.map((day, index) => (
            <Tab key={index} title={daysOfTheWeek[index]} dates={`${getDate().getDate() + index} ${month[getDate().getMonth()]}`}>
              <TaskList tasks={day} />
            </Tab>
          ))
        }
      </Tabs>
    )
  }
}
