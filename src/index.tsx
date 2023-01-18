import { useEffect } from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store, useAppDispatch } from './store'
import { checkUser } from 'contracts/checkUser'
import { Header } from 'components/header'
import { Pages } from 'pages'
import { login } from 'store/user';
import './styles.css'

const root = createRoot(document.getElementById('app')!)

const App = () => {
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    const fetchData = async () => {
      const user = await checkUser()

      if (!user.error) {
        dispatch(login(user))
      }
    }

    fetchData()
  }, [])


  return (
    <>
      <Header />
      <Pages />
    </>
  )
}

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
