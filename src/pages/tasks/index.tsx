import { useState, useEffect } from 'react'

import { daysOfTheWeek } from 'helpers/constans'
import { getTasks } from 'contracts/getTasks'
import { TaskList } from './taskList'
import { Tabs } from 'components/tabs'
import { Tab } from 'components/tabs/tab'

export const Tasks = () => {
  const [days, setDays] = useState([])
  const [isLoading, setIsloading] = useState(false)

  const getDailyTasks = async () => {
    setIsloading(true)

    try {
      setDays(await getTasks())
    } catch (error) { }

    setIsloading(false)
  }

  useEffect(() => {
    getDailyTasks()
  }, [])

  const getCurrentDay = () => {
    const dayNow = new Date().getDay()

    return dayNow ? dayNow - 1 : 6
  }

  return (
    <Tabs selectedIndex={getCurrentDay()} loading={isLoading}>
      {
        days.map((day, index) => (
          <Tab key={index} title={daysOfTheWeek[index]}>
            <TaskList tasks={day} getTasks={getDailyTasks} activeTabIndex={index} />
          </Tab>
        ))
      }
    </Tabs>
  )
}
