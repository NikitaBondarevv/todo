import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'

import { UserForm } from 'components/userForm'
import { LoginForm } from 'components/loginForm/LoginForm'
import { UserContext } from 'contexts/userContext'
import { Tasks } from 'pages/tasks'
import { TasksInfo } from 'pages/tasksInfo'
import { UpdateCreateTask } from './updateCreateTask'
import { Contacts } from 'pages/contacts'
import { LinkToMainPage } from './linkToMainPage'

export const Pages = () => {
  const { isAuthenticated, setUser, user } = useContext(UserContext)

  return (
    <main>
      {
        isAuthenticated
          ? (
            <Routes>
              <Route path='/' element={<TasksInfo />} />
              <Route path='/tasks' element={<Tasks />} />
              <Route path='/task/:day/:id?' element={<UpdateCreateTask />} />
              <Route path='/profile' element={<UserForm disabledFields={['email']} user={{
                email: user?.email,
                firstName: user?.firstname,
                lastName: user?.lastname
              }} />} />
              <Route path='/contacts' element={<Contacts />} />
            </Routes>
          )
          : (
            <>
              <Routes>
                <Route path='/create' element={<UserForm />} />
                <Route path='/createdUser' element={<LinkToMainPage />} />
                <Route path='/login' element={<LoginForm setUser={setUser} />} />
              </Routes>
            </>
          )
      }
    </main>
  )
}
