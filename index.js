import { useState, useEffect, createContext, useMemo } from 'react';
import { createRoot } from 'react-dom/client'

import { checkUser } from './src/contracts/checkUser'
import { Header } from './src/components/header'
import { Main } from './src/components/main'
import './styles.css'

export const ContextUser = createContext(true)

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
    <ContextUser.Provider value={contextValue}>
      <Header />
      <Main />
    </ContextUser.Provider>
  )
}

root.render(<App />)
