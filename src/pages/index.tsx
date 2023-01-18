import { Route, Routes } from 'react-router-dom'

import { Profile } from 'pages/profile'
import { LoginForm } from 'components/loginForm/LoginForm'
import { Tasks } from 'pages/tasks'
import { Preloader } from 'components/preloader'
import { TasksInfo } from 'pages/tasksInfo'
import { Contacts } from 'pages/contacts'
import { ManageTask } from './manageTask'
import { CreateUser } from './createUser'
import { Registered } from './registered'
import { useAppDispatch, useAppSelector } from 'store'
import { login } from 'store/user'

const NotFound = () => <h1>Not Found</h1>

export const Pages = () => {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated)
  const dispatch = useAppDispatch()

  return (
    <main>
      {
        isAuthenticated
          ? (
            <Routes>
              <Route path="/" element={<TasksInfo />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/task/:day/:id?" element={<ManageTask />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          )
          : (
            <Routes>
              <Route path="/create" element={<CreateUser />} />
              <Route path="/registered" element={<Registered />} />
              <Route path="/" element={<LoginForm setUser={user => dispatch(login(user))} />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path='/notfound' element={<NotFound />} />
            </Routes>
          )
      }
    </main>
  )
}
