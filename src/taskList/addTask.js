import { Component } from 'react'
import styles from './styles.css'

export class AddTask extends Component {
  state = {
    hidden: true,
    value: ''
  }

  setValue = ({ target: { value } }) => {
    this.setState({ value });
  }

  handleBlur = (e) => {
    e.preventDefault();

    this.setState({ hidden: true });
  }

  showInput = () => {
    this.setState({ hidden: false });
  }

  render() {
    const { value, hidden } = this.state;

    return (
      <div className={styles.addTask}>
        {
          hidden ? <span onClick={this.showInput}>{'Add new task'}</span> :
            <form onSubmit={this.handleBlur}>
              <input className={styles.editableText} name="text" value={value} onChange={this.setValue} onBlur={this.handleBlur} autoFocus />
            </form>
        }
      </div>
    )
  }
}