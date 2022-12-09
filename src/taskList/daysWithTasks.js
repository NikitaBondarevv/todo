import { Component } from 'react'

import { TaskList } from '.'
import { dates, daysOfTheWeek } from '../helpers/constans'
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

  render() {
    const { days } = this.state

    return (
      <Tabs selectedIndex={new Date().getDay() - 1}>
        {
          days.map((day, index) => (
            <Tab key={index} title={daysOfTheWeek[index]} dates={dates[index]}>
              <TaskList tasks={day} />
            </Tab>
          ))
        }
      </Tabs>
    )
  }
}
