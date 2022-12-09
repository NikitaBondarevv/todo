import { Component } from 'react'
import PropTypes from 'prop-types'

import { Task } from './task'
import styles from './styles.css'

export class TaskList extends Component {
  static defaultProps = {
    tasks: []
  }

  static propTypes = {
    tasks: PropTypes.array
  }

  state = {
    todos: this.props.tasks,
    hidden: true,
    value: ''
  }

  componentDidUpdate(prevProps) {
    if (this.props.tasks !== prevProps.tasks) {

      this.setState({ todos: this.props.tasks })
    }
  }

  completeTask = (index) => {
    this.state.todos[index].done = true

    this.setState({ todos: this.state.todos })
  }

  setInProgressTask = (index) => {
    this.state.todos[index].done = undefined

    this.setState({ todos: this.state.todos })
  }

  setValue = ({ target: { value } }) => {
    this.setState({ value })
  }

  deleteTask = (id) => {
    this.setState({
      todos: this.state.todos.filter(task => task.id !== id)
    })
  }

  showInput = () => {
    this.setState({ hidden: false })
  }

  randomInteger = () => {
    const rand = 1 + Math.random() * (100 + 1 - 1);

    return Math.floor(rand);
  }

  addTaskAndHandleBlur = (e) => {
    e.preventDefault()

    if (this.state.value.length > 2) {
      this.state.todos.push({
        title: this.state.value,
        id: this.randomInteger(),
        done: false
      })
    }

    this.setState({
      todos: this.state.todos,
      hidden: true,
      value: ''
    })
  }

  render() {
    const { todos, value, hidden } = this.state

    return (
      <div className={styles.content}>
        <ul className={styles.tasksList}>
          {
            todos.map((task, index) =>
              <Task key={index} index={index + 1} done={task.done} title={task.title}>
                <div className={styles.buttons}>
                  <a onClick={() => this.completeTask(index)}>done</a>
                  {
                    task.done === undefined ? '' :
                      <a onClick={() => this.setInProgressTask(index)} className={styles.inProgress}>
                        in progress
                      </a>
                  }
                  <a onClick={() => this.deleteTask(task.id)} className={styles.delete}>delete</a>
                </div>
              </Task>
            )
          }
        </ul>
        <div className={styles.addTask}>
          {
            hidden ? <span onClick={this.showInput}>Add new task</span> :
              <form onSubmit={this.addTaskAndHandleBlur}>
                <input className={styles.editableText}
                  name="text"
                  value={value}
                  onChange={this.setValue}
                  onBlur={this.addTaskAndHandleBlur}
                  autoFocus
                />
              </form>
          }
        </div>
      </div>
    )
  }
}
