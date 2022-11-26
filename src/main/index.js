import { Component } from 'react';

import { Input } from '../input';
import { UserFrom } from '../userForm';
import styles from './styles.css';

export class Main extends Component {
  state = {};

  render() {
    return (
      <main className={styles.main}>
        <UserFrom />
      </main>
    )
  }
}
