// import { UserForm } from '../userForm'
import { Tasks } from '../tasks'
import { LoginForm } from '../loginForm/LoginForm'
import { ContextUser } from '../../index'
import { TasksInfo } from '../tasksInfo'

export const Main = () => (
  <ContextUser.Consumer>
    {
      ({ isAuthenticated, setUser }) => (
        <main>
          {
            isAuthenticated
              ? <>
                  <TasksInfo />
                  <Tasks />
                </>
              : <LoginForm setUser={setUser} />
          }
        </main>
      )
    }
  </ContextUser.Consumer>
)
