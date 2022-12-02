import { Component } from 'react'

import styles from './styles.css'

const Tasks = ({ index, completed, title, buttons }) => (
  <li className={completed ? styles.completed : styles.tasks}>
    <span className={completed ? styles.done : completed === undefined ? styles.progress : styles.waiting}></span>
    <p className={completed === undefined ? styles.taskInProgress : ''} >{`${index}. ${title}`}</p>
    {buttons}
  </li>
)

export class TaskList extends Component {
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
                  <a href='#done' onClick={() => this.completeTask(index)}></a>
                  {todo.completed === undefined ? '' : <a href='#inProgress' onClick={() => this.setInProgressTask(index)} className={styles.inProgress}></a>}
                  <a href='#delete' onClick={() => this.deleteTask(todo.id)} className={styles.delete}></a>
                </div>
              } />
            )
          }
        </ul>
      </>
    )
  }
}
