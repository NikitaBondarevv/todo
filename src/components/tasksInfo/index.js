import { useState, useEffect } from 'react'

import { getInfo } from '../../contracts/getInfo'
import { checkUser } from '../../contracts/checkUser'
import { getTasksInfo } from '../../helpers/constansInfo'
import styles from './styles.css'

export const TasksInfo = () => {
  const [info, setInfo] = useState({})
  const [user, setUser] = useState('')

  useEffect(() => {
    const getData = async () => {
      setInfo(await getInfo())
      setUser(await checkUser())
    }

    getData()
  }, [])

  return (
    <div className={styles.tasksInfo}>
      <span>Hello, {user.firstName}</span>
      <ul className={styles.list}>
        {
          getTasksInfo(info).map((taskInfo, index) => (
            <li className={styles[taskInfo.styles]} key={index}>
              {taskInfo.text}
              <mark>
                {taskInfo.amount}
              </mark>
              {taskInfo.otherText}
            </li>
          ))
        }
      </ul>
      <a className={styles.link} href="#">Go to the task list</a>
    </div>
  )
}
