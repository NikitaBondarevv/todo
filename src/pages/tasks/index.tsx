import { useState, useEffect } from 'react'

import { daysOfTheWeek } from 'helpers/constans'
import { getTasks } from 'contracts/getTasks'
import { Preloader } from 'components/preloader'
import { TaskList } from './taskList'
import { Tabs } from 'components/tabs'
import { Tab } from 'components/tabs/tab'

export const Tasks = () => {
  const [days, setDays] = useState([])
  const [isLoading, setIsloading] = useState(false)

  const getDailyTasks = async () => {
    setDays(await getTasks())
    setIsloading(false)
  }

  useEffect(() => {
    setIsloading(true)
    getDailyTasks()
  }, [])

  const getCurrentDay = () => {
    const dayNow = new Date().getDay()

    return dayNow ? dayNow - 1 : 6
  }

  return (
    isLoading ? <Preloader size={100} />
      : <Tabs selectedIndex={getCurrentDay()}>
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
