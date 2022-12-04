import { Component } from 'react'
import PropTypes from 'prop-types';

import styles from './styles.css'

const Tasks = ({ index, completed, title, buttons }) => (
  <li className={completed ? styles.completed : styles.tasks}>
    <span className={completed ? styles.done : completed === undefined ? styles.progress : styles.waiting}></span>
    <p className={completed === undefined ? styles.taskInProgress : ''}>{`${index}. ${title}`}</p>
    {buttons}
  </li>
)

export class TaskList extends Component {
  static defaultProps = {
    title: '',
    index: 0,
    completed: false,
  }

  static propTypes = {
    title: PropTypes.string,
    index: PropTypes.number,
    completed: PropTypes.bool,
    buttons: PropTypes.element
  }
  
  state = {
    todos: [],
    inputValue: ''
  }

  originTodos = []

  async getTasks() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await response.json()

    this.originTodos = todos

    this.setState({ todos: this.originTodos })
  }

  componentDidMount() {
    this.getTasks()
  }

  completeTask = (index) => {
    this.state.todos[index].completed = true

    this.setState({ todos: this.state.todos })
  }

  setInProgressTask = (index) => {
    this.state.todos[index].completed = undefined

    this.setState({ todos: this.state.todos })
  }

  deleteTask = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  taskSearch = ({ target: { value }}) => {
    this.setState({
      inputValue: value,
      todos: value.length > 1 ? this.originTodos.filter(todo => todo.title.includes(value)) : this.originTodos
    })
  }

  render() {
    const { todos, inputValue } = this.state

    return (
      <>
        <input value={inputValue} onChange={this.taskSearch} className={styles.search} placeholder="SEARCH" />
        <ul className={styles.tasksList}>
          {
            todos.map((todo, index) =>
              <Tasks key={index} index={index + 1} completed={todo.completed} title={todo.title} buttons={
                <div className={styles.buttons} >
                  <a onClick={() => this.completeTask(index)}>done</a>
                  {todo.completed === undefined ? '' : <a onClick={() => this.setInProgressTask(index)} className={styles.inProgress}>in progress</a>}
                  <a onClick={() => this.deleteTask(todo.id)} className={styles.delete}>delete</a>
                </div>
              } />
            )
          }
        </ul>
      </>
    )
  }
}
