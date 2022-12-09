// import { UserForm } from '../userForm';
import { DaysWithTasks } from '../taskList/daysWithTasks';
import { Tabs } from '../tabs';
import { UsersList } from '../usersList'
import { Gallery } from '../gallery';
import { Tab } from '../tabs/tab';
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
            <>
              <Tabs selectedIndex="1">
                <Tab title="Users">
                  <UsersList />
                </Tab>

                <Tab title="Gallery">
                  <Gallery />
                </Tab>

              </Tabs>
              <DaysWithTasks />
            </>
            : <LoginForm setUser={setUser} />
        }
      </main>
    }
  </ContextUser.Consumer>
)
