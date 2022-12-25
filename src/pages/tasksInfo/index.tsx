import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getInfo } from 'contracts/getInfo'
import { checkUser } from 'contracts/checkUser'
import { getTasksInfo } from 'helpers/constansInfo'
import { IUser } from 'interfaces/IUser'
import { IGetTasksInfo } from 'interfaces/IGetTasksInfo'
import styles from './styles.css'
import { IInfo } from 'interfaces/IInfo'

export const TasksInfo = () => {
  const [info, setInfo] = useState<IInfo>({
    done: 0,
    inProgress: 0,
    total: 0,
    waiting: 0
  })
  const [user, setUser] = useState<IUser | undefined>()

  useEffect(() => {
    const getData = async () => {

      setInfo(await getInfo())
      setUser(await checkUser())
    }

    getData()
  }, [])

  return (
    <div className={styles.tasksInfo}>
      <span>Hello, {user?.firstname}</span>
      <ul className={styles.list}>
        {
          getTasksInfo(info).map((taskInfo: IGetTasksInfo, index) => (
            <li className={styles[!taskInfo.styles ? '' : taskInfo.styles]} key={index}>
              {taskInfo.text}
              <mark>
                {taskInfo.amount}
              </mark>
              {taskInfo.otherText}
            </li>
          ))
        }
      </ul>
      <Link className={styles.link} to="/tasks">Go to the task list</Link>
    </div>
  )
}
