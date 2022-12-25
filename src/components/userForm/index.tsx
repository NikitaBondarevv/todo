import { FormEvent, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './styles.css'
import msg from './images/msg-element.png'
import { fields } from './registerFields'
import { TUserForm, TTarget, TRegisterFields } from './types'
import { IUser } from 'interfaces/IUser'
import { UserContext } from 'contexts/userContext'
import { updateUser } from 'contracts/updateUser'

export const UserForm = ({ disabledFields, user }: TUserForm) => {
  const { isAuthenticated } = useContext(UserContext)
  const [registerFields, setRegisterFields] = useState<TRegisterFields>(fields.reduce<TRegisterFields>((prev, next) => (prev[next.label] = { value: user[next.label] ?? '' }) && prev, {}))

  const setValue = ({ target: { value, name } }: TTarget) => {
    setRegisterFields(registerFields => ({
      ...registerFields,
      [name]: { value }
    }))
  }

  const validate = ({ target: { value, name } }: TTarget, index: number) => {
    const { reg } = fields[index]

    if (['passwordRepeat', 'password'].includes(name) && registerFields.passwordRepeat.value &&
      registerFields.passwordRepeat.value !== registerFields.password.value) {
      setRegisterFields(registerFields => ({
        ...registerFields,
        passwordRepeat: {
          [name]: value,
          error: 'Passwords are not matched'
        }
      }))

      return
    }

    setRegisterFields(registerFields => ({
      ...registerFields,
      [name]: {
        value,
        error: reg.test(value) ? '' : `${name} is incorrect`
      }
    }))
  }

  const canSubmit = () => !fields.some(({ label, reg }) => {
    if (!registerFields[label].value) {
      return true
    }

    return !reg.test(registerFields[label].value)
  })

  const save = (e: FormEvent) => {
    e.preventDefault()

    if (!canSubmit()) {
      return
    }

    const data = Object.entries(registerFields).reduce((user, [key, { value }]) => {
      user[key as keyof IUser] = value

      return user
    }, {} as IUser)

    updateUser({
      firstname: data.firstname,
      lastname: data.lastname,
      password: data.password
    })
    
    console.log(data)
  }

  return (
    <form className={styles.loginForm} onSubmit={save}>
      <ul>
        {fields.map((field, index) => {
          const stateField = registerFields[field.label];

          return (
            <li key={field.label} className={styles[field.label]}>
              <input type={field.secure ? 'password' : 'text'}
                name={field.label}
                className={stateField.error ? styles.error : styles.success}
                placeholder={field.label.toUpperCase()}
                value={stateField.value}
                onChange={setValue}
                onBlur={e => validate(e, index)}
                disabled={disabledFields.includes(field.label)}
              />
              {stateField.error && <div className={styles.info}><img src={msg} /><span className={styles.textInfo}>{stateField.error}</span></div>}
            </li>
          )
        }
        )}
      </ul>
      {
        isAuthenticated
          ? <input type="submit" value="SAVE" disabled={!canSubmit()} />
          : (
            <Link to="/createdUser">
              <input type="submit" value="SAVE" disabled={!canSubmit()} />
            </Link>
          )
      }
    </form>
  )
}

UserForm.defaultProps = {
  disabledFields: [],
  user: {}
}

UserForm.propTypes = {
  disabledFields: PropTypes.array,
  user: PropTypes.object
}
