import { Component } from 'react'

import styles from './styles.css'

const Tasks = ({ id, completed, title, buttons }) => (
  <li key={id} className={completed ? styles.completed : styles.tasks}>
    <span className={completed ? styles.done : completed === undefined ? styles.progress : styles.waiting}></span>
    <p className={completed === undefined ? styles.taskInProgress : ''} >{`${id}. ${title}`}</p>
    {buttons}
  </li>
)

export class TaskList extends Component {
  state = {
    todos: [],
    value: ''
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

  taskSearch = ({ target: { value } }) => {
    this.setState({
      value,
      todos: this.originTodos
    })

    if (value.length > 1) {
      this.setState({ todos: this.originTodos.filter(todo => todo.title.includes(value)) })
    }
  }

  render() {
    const { todos, value } = this.state

    return (
      <>
        <input value={value} onChange={this.taskSearch} className={styles.search} placeholder="SEARCH" />
        <ul className={styles.tasksList}>
          {
            todos.map((todo, index) =>
              <Tasks key={index} id={index + 1} completed={todo.completed} title={todo.title} buttons={
                <div className={styles.buttons} >
                  <a onClick={() => this.completeTask(index)}></a>
                  {todo.completed === undefined ? '' : <a onClick={() => this.setInProgressTask(index)} className={styles.inProgress}></a>}
                  <a onClick={() => this.deleteTask(todo.id)} className={styles.delete}></a>
                </div>
              } />
            )
          }
        </ul>
      </>
    )
  }
}
