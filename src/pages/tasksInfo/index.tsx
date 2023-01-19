import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getInfo } from 'contracts/getInfo'
import { getTasksInfo } from 'helpers/constansInfo'
import { IGetTasksInfo } from 'interfaces/IGetTasksInfo'
import { useAppDispatch, useAppSelector } from 'store'
import { setInfo } from 'store/taskInfo'
import styles from './styles.css'

export const TasksInfo = () => {
  const user = useAppSelector(state => state.user.data)
  const info = useAppSelector(state => state.taskInfo.data)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const getData = async () => {
      dispatch(setInfo(await getInfo()))
    }

    getData()
  }, [])

  return (
    <div className={styles.tasksInfo}>
      <span>Hello, {user?.firstName}</span>
      <ul className={styles.list}>
        {
          getTasksInfo(info!).map((taskInfo: IGetTasksInfo, index) => (
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
