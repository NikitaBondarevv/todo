import { Component } from "react"

import styles from './styles.css'

export class Input extends Component {
  state = {
    value: ''
  }

  roles = ['admin', 'guest', 'anonim']

  setValue = ({ target: { value, name, type, checked } }) => {
    if (/radio|checkbox/.test(type)) {
      this.setState({ value: checked })
    } else {
      this.setState({ value: value })
    }
  }

  render() {
    const { value } = this.state
    const { name, type = 'text' } = this.props

    return (
      <input onChange={this.setValue} value={value} name={name} type={type} />
    )
  }
}
