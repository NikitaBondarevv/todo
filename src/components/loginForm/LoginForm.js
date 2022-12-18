import PropTypes from 'prop-types';

import { login } from '../../contracts/login'
import styles from './styles.css'

export const LoginForm = ({ setUser }) => {
  const submitHandler = async e => {
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
      <div className={styles.password}>
        <input type="password" placeholder="Password" name="password" />
      </div>
      <input type="submit" value="Login" />
    </form>
  )
}

LoginForm.defaultProps = {
  setUser: () => {}
}

LoginForm.propTypes = {
  setUser: PropTypes.func
}
