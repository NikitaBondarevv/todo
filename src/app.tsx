import { useEffect } from 'react'

import { useAppDispatch } from './store'
import { checkUser } from 'contracts/checkUser'
import { Header } from 'components/header'
import { Pages } from 'pages'
import { login } from 'store/user'
import './styles.css'

export const App = () => {
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
