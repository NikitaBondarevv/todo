import { Component } from 'react'

import { TaskList } from './taskList'
import { daysOfTheWeek } from '../helpers/constans'
import { Tabs } from './tabs'
import { Tab } from './tabs/tab'
import { getTasks } from '../contracts/getTasks'

export class Tasks extends Component {
  state = {
    days: []
  }

  getTasks = async () => {
    this.setState({ days: await getTasks() })
  }

  componentDidMount() {
    this.getTasks()
  }

  getCurrentDay = () => {
    let dayNow = new Date().getDay()

    return dayNow ? dayNow - 1 : 6
  }

  render() {
    const { days } = this.state

    return (
      <Tabs selectedIndex={this.getCurrentDay()}>
        {
          days.map((day, index) => (
            <Tab key={index} title={daysOfTheWeek[index]}>
              <TaskList tasks={day} getTasks={this.getTasks} />
            </Tab>
          ))
        }
      </Tabs>
    )
  }
}
