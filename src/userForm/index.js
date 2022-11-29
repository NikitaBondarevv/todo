import { Component } from "react"

import styles from './styles.css'
import msg from '../../images/msg-element.png'

export class UserFrom extends Component {

  fields = [
    { label: 'email', reg: /^\w+@\w+\.[a-z]{2,5}$/ },
    { label: 'name', reg: /^[^ ]{3,20}$/ },
    { label: 'surname', reg: /^[^ ]{3,20}$/ },
    { label: 'password', reg: /^[^ ]{6,20}$/, secure: true },
    { label: 'passwordRepeat', reg: /^[^ ]{6,20}$/, secure: true }
  ];

  state = this.fields.reduce((prev, next) => (prev[next.label] = { value: '' }) && prev, {});

  setValue = ({ target: { value, name } }) => {
    this.setState({ [name]: { value } })
  }

  validate = ({ target: { value, name }}, index) => {
    const { reg } = this.fields[index]

    if (['passwordRepeat', 'password'].includes(name) && this.state.passwordRepeat.value &&
    this.state.passwordRepeat.value !== this.state.password.value) {
      this.setState({ 
        passwordRepeat: { 
          [name]: value,
          error: 'Passwords are not matched'
        }
       })

       return
    }

    this.setState({ 
      [name]: { 
        value,
        error: reg.test(value) ? '' : `${name} is incorrect`
      }
     })
  }

  canSubmit = () => !this.fields.some(({ label, reg }) => {
      if (!this.state[label].value) {
        return true
      }

      return !reg.test(this.state[label].value)
    })

  save = (e) => {
    e.preventDefault()

    if (!this.canSubmit()) {
      return
    }

    const data = Object.entries(this.state).reduce((user, [key, { value }]) => {
      user[key] = value

      return user
    }, {})

    console.log(data);
  }

  render() {
    const { fields, state } = this
    const { disabledFields = [] } = this.props

    return (
      <form className={styles.loginForm} onSubmit={this.save}>
        <ul>
          {fields.map((field, index) => {
            const stateField = state[field.label];

            return (
              <li key={field.label} className={styles[field.label]}>
                <input type={field.secure ? 'password' : 'text'}
                  name={field.label}
                  className={stateField.error ? styles.error : styles.success}
                  placeholder={field.label.toUpperCase()}
                  value={stateField.value}
                  onChange={this.setValue}
                  onBlur={e => this.validate(e, index)}
                  disabled={disabledFields.includes(field.label)}
                />
                {stateField.error && <div className={styles.info}><img src={msg} /><span className={styles.textInfo}>{stateField.error}</span></div>}
              </li>
            );
          }
          )}
        </ul>

        <input type="submit" value="SAVE" disabled={!this.canSubmit()} />
      </form>
    )
  }
}
