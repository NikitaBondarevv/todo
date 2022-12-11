// import { UserForm } from '../userForm';
import { DaysWithTasks } from '../taskList/daysWithTasks';
import { LoginForm } from '../loginForm/LoginForm';
import { ContextUser } from '../../index'

export const Main = () => (
  <ContextUser.Consumer>
    {
      ({ isAuthenticated, setUser }) =>
        <main>
          {
            isAuthenticated
              ?
              <DaysWithTasks />
              : <LoginForm setUser={setUser} />
          }
        </main>
    }
  </ContextUser.Consumer>
)
