import { login } from '../contracts/login'
import styles from './styles.css'

export const LoginForm = ({ setUser }) => {
  const submitHandler = async (e) => {
    const {
      target: {
        elements: { email, password }
      }
    } = e

    e.preventDefault()

    const user = await login(email.value, password.value)

    setUser(user)
  }

  return (
    <form onSubmit={submitHandler} className={styles.loginForm}>
      <input type="text" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <input type="submit" value="Login" />
    </form>
  )
}
