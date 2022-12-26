import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Profile } from 'pages/profile'
import { LoginForm } from 'components/loginForm/LoginForm'
import { UserContext } from 'contexts/userContext'
import { Tasks } from 'pages/tasks'
import { TasksInfo } from 'pages/tasksInfo'
import { UpdateCreateTask } from './updateCreateTask'
import { Contacts } from 'pages/contacts'
import { CreateUser } from './createUser'
import { Registered } from './registered'
import { NotLoggedIn } from './notLoggedIn'

export const Pages = () => {
  const { isAuthenticated, setUser } = useContext(UserContext)

  return (
    <main>
      {
        isAuthenticated
          ? (
            <Routes>
              <Route path='/' element={<TasksInfo />} />
              <Route path='/tasks' element={<Tasks />} />
              <Route path='/task/:day/:id?' element={<UpdateCreateTask />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/contacts' element={<Contacts />} />
            </Routes>
          )
          : (
            <>
              <Routes>
                <Route path='/create' element={<CreateUser />} />
                <Route path='/registered' element={<Registered />} />
                <Route path='/' element={<LoginForm setUser={setUser} />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/tasks' element={<NotLoggedIn />} />
              </Routes>
            </>
          )
      }
    </main>
  )
}
