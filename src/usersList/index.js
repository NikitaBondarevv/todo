import { Component } from 'react';

import styles from './styles.css'
import { getUsers } from './getUsers';

export class UsersList extends Component {
  state = {
    users: [],
    inputValue: ''
  }

  async getUsers() {
    this.originUsers = await getUsers()

    this.setState({ users: this.originUsers })
  }

  componentDidMount() {
    this.getUsers()
  }

  usersSearch = ({ target: { value } }) => {
    this.setState({
      inputValue: value,
      users: value.length > 1 ? this.originUsers.filter(user => user.username.includes(value)) : this.originUsers
    })
  }

  render() {
    const { users, inputValue } = this.state

    return (
      <>
        <input value={inputValue} onChange={this.usersSearch} className={styles.search} placeholder="SEARCH" />
        <ul className={styles.list}>
          {
            users.map((user, index) => <li key={index} className={styles.user}>{user.username}</li>)
          }
        </ul>
      </>
    )
  }
}
