import PropTypes from 'prop-types'

import { login } from 'contracts/login'
import { TLoginFormProps } from './types'
import styles from './styles.css'
import { FormEvent, useState } from 'react';
import { Preloader } from 'components/preloader';

export const LoginForm = ({ setUser }: TLoginFormProps) => {
  const [isLoading, setIsloading] = useState(false)

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    const {
      currentTarget: {
        elements
      }
    } = e

    const { email, password } = elements as unknown as Record<string, HTMLInputElement>

    e.preventDefault()
    setIsloading(true)

    const user = await login(email.value, password.value)

    setUser(user)
  }

  return (
    <form onSubmit={submitHandler} className={styles.loginForm}>
      <input type="text" placeholder="Email" name="email" />
      <div className={styles.password}>
        <input type="password" placeholder="Password" name="password" />
      </div>
      <button type='submit' disabled={isLoading}>
        {isLoading ? <Preloader size={25}/> : 'Login'}
        </button>
    </form>
  )
}

LoginForm.propTypes = {
  setUser: PropTypes.func
}
