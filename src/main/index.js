// import { UserForm } from '../userForm';
import styles from './styles.css';
import { Tabs } from '../tabs';
import { Tab } from '../tabs/tab';
import { LoginForm } from '../loginForm/LoginForm';
import { ContextUser } from '../../index'
import { UsersList } from '../usersList'
import { Gallery } from '../gallery';
import { TaskList } from '../taskList';

export const Main = () => (
  <ContextUser.Consumer>
    {
      ({ isAuthenticated, setUser }) => <main className={styles.main}>
        {
          isAuthenticated
            ?
            <>
              <Tabs selectedIndex="1">
                <Tab title='Users'>
                  <UsersList />
                </Tab>

                <Tab title='Gallery'>
                  <Gallery />
                </Tab>
              </Tabs>
              <TaskList />
            </>
            : <LoginForm setUser={setUser} />
        }
      </main>
    }
  </ContextUser.Consumer>
)
