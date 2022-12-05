import { UserForm } from '../userForm';
import styles from './styles.css';
import { TaskList } from "../taskList";
import { Tabs } from '../tabs';
import { Tab } from '../tabs/tab';
import { LoginForm } from '../loginForm/LoginForm';
import { ContextUser } from '../../index'

export const Main = () => (
  <ContextUser.Consumer>
    {
      ({ isAuthenticated, setUser }) => <main className={styles.main}>
        {
          isAuthenticated
            ? <Tabs>
              <Tab title='Tab 1'>
                <UserForm />
              </Tab>

              <Tab title='Tab 2'>
                <TaskList />
              </Tab>

            </Tabs>
            : <LoginForm setUser={setUser} />
        }
      </main>
    }
  </ContextUser.Consumer>
)
