import { Component } from "react";

import styles from './styles.css'
import { getUsers } from "./getUsers";

export class User extends Component {
  state = {
    users: []
  }

  async getUsers() {
    this.originUsers = await getUsers()

    this.setState({ users: this.originUsers })
  }

  componentDidMount() {
    this.getUsers()
  }

  render() {
    const { users } = this.state

    return users.map((user, index) => <li key={index} className={styles.user}>{user.username}</li>)
  }
}
