// import { UserForm } from '../userForm';
import { Tasks } from '../tasks';
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
              <Tasks />
              : <LoginForm setUser={setUser} />
          }
        </main>
    }
  </ContextUser.Consumer>
)
