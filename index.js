import { useState, useEffect, createContext } from 'react';
import { createRoot } from 'react-dom/client';

import { checkUser } from './src/contracts/checkUser';
import { Header } from './src/header';
import { Main } from './src/main';
import './styles.css';

export const ContextUser = createContext(true);

const root = createRoot(document.getElementById('app'));

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const user = await checkUser()

      setIsAuthenticated(!user.error)
    }

    fetchData()
  }, [])

  const setUser = user => setIsAuthenticated(Boolean(user))

  const contextValue = {
    isAuthenticated,
    setUser
  }

  return (
    <ContextUser.Provider value={contextValue}>
      <Header />
      <Main />
    </ContextUser.Provider>
  )
}

root.render(<App />);
