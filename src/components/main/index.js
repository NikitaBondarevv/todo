import { useContext } from 'react'

// import { UserForm } from '../userForm'
import { LoginForm } from 'components/loginForm/LoginForm'
import { UserContext } from 'contexts/userContext'
import { Tasks } from '../tasks'
import { TasksInfo } from '../tasksInfo'

export const Main = () => {
  const { isAuthenticated, setUser } = useContext(UserContext)

  return (
    <main>
      {
        isAuthenticated
          ? (
            <>
              <TasksInfo />
              <Tasks />
            </>
          )
          : <LoginForm setUser={setUser} />
      }
    </main>
  )
}
