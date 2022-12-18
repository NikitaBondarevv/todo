import { useState, useEffect, useMemo } from 'react';
import { createRoot } from 'react-dom/client'

import { checkUser } from 'contracts/checkUser'
import { Header } from 'components/header'
import { Main } from 'components/main'
import { UserContext } from './contexts/userContext';
import './styles.css'

const root = createRoot(document.getElementById('app'))

const App = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const user = await checkUser()

      if (!user.error) {
        setUser(user)
      }
    }

    fetchData()
    setUser()
  }, [])

  const contextValue = useMemo(() => ({
    isAuthenticated: user && !user.error,
    user,
    setUser
  }), [user])

  return (
    <UserContext.Provider value={contextValue}>
      <Header />
      <Main />
    </UserContext.Provider>
  )
}

root.render(<App />)
