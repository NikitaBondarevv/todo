import { ReactElement, useContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

// import { Profile } from 'pages/profile'
import { LoginForm } from 'components/loginForm/LoginForm'
import { UserContext } from 'contexts/userContext'
import { Tasks } from 'pages/tasks'
// import { Preloader } from 'components/preloader'
import { TasksInfo } from 'pages/tasksInfo'
import { Contacts } from 'pages/contacts'
import { ManageTask } from './manageTask'
import { CreateUser } from './createUser'
import { Registered } from './registered'

const NotFound = () => <h1>Not Found</h1>

const ComponentAsync = ({ path = '', name = '' }) => {
  const [Component, setComponent] = useState<ReactElement>(<p>Loading...</p>)

  useEffect(() => {
    const getComponent = async () => {
      const component = await import(`pages/${path}`)

      setComponent(component[name])
    }

    getComponent()
  }, [])

  return Component
}

export const Pages = () => {
  const { isAuthenticated, setUser } = useContext(UserContext)

  return (
    <main>
      {
        isAuthenticated
          ? (
            <Routes>
              <Route path="/" element={<TasksInfo />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/task/:day/:id?" element={<ManageTask />} />
              <Route path="/profile" element={<ComponentAsync path='profile' name='Profile' />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          )
          : (
            <Routes>
              <Route path="/create" element={<CreateUser />} />
              <Route path="/registered" element={<Registered />} />
              <Route path="/" element={<LoginForm setUser={setUser} />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path='/notfound' element={<NotFound />} />
            </Routes>
          )
      }
    </main>
  )
}
