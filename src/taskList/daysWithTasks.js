import { Component } from 'react'

import { TaskList } from '.'
import { daysOfTheWeek } from '../helpers/constans'
import { Tabs } from './tabs'
import { Tab } from './tabs/tab'
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

  getDayNow = () => {
    let dayNow = new Date().getDay()

    if (dayNow === 0) {
      return dayNow += 6
    }

    return dayNow - 1
  }

  render() {
    const { days } = this.state

    return (
      <Tabs selectedIndex={this.getDayNow()}>
        {
          days.map((day, index) => (
            <Tab key={index} title={daysOfTheWeek[index]}>
              <TaskList tasks={day} />
            </Tab>
          ))
        }
      </Tabs>
    )
  }
}
