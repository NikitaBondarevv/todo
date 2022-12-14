// import { UserForm } from '../userForm'
import { Tasks } from '../tasks'
import { LoginForm } from '../loginForm/LoginForm'
import { ContextUser } from '../../../index'
import { TasksInfo } from '../tasksInfo'
import { useContext } from 'react'

export const Main = () => {
  const { isAuthenticated, setUser } = useContext(ContextUser)
  
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
