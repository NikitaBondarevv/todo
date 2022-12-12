import { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'
import msg from './images/msg-element.png'
import { fields } from './registerFields'

export const UserForm = ({ disabledFields }) => {
  const [registerFields, setRegisterFields] = useState(fields.reduce((prev, next) => (prev[next.label] = { value: '' }) && prev, {}))

  const setValue = ({ target: { value, name } }) => {
    setRegisterFields(registerFields => ({
      ...registerFields,
      [name]: { value }
    }))
  }

  const validate = ({ target: { value, name } }, index) => {
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

  const save = (e) => {
    e.preventDefault()

    if (!canSubmit()) {
      return
    }

    const data = Object.entries(registerFields).reduce((user, [key, { value }]) => {
      user[key] = value

      return user
    }, {})

    console.log(data);
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

      <input type="submit" value="SAVE" disabled={!canSubmit()} />
    </form>
  )
}

UserForm.defaultProps = {
  disabledFields: []
}

UserForm.propTypes = {
  disabledFields: PropTypes.array
}
