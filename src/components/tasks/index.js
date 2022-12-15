import { useState, useEffect } from 'react'

import { TaskList } from './taskList'
import { daysOfTheWeek } from '../../helpers/constans'
import { Tabs } from '../tabs'
import { Tab } from '../tabs/tab'
import { getTasks } from '../../contracts/getTasks'

export const Tasks = () => {
  const [days, setDays] = useState([])

  const getDailyTasks = async () => {
    setDays(await getTasks())
  }

  useEffect(() => {
    getDailyTasks()
  }, [])

  const getCurrentDay = () => {
    const dayNow = new Date().getDay()

    return dayNow ? dayNow - 1 : 6
  }

  return (
    <Tabs selectedIndex={getCurrentDay()}>
      {
        days.map((day, index) => (
          <Tab key={index} title={daysOfTheWeek[index]}>
            <TaskList tasks={day} getTasks={getDailyTasks} getCurrentDay={getCurrentDay} activeTabIndex={index} />
          </Tab>
        ))
      }
    </Tabs>
  )
}
