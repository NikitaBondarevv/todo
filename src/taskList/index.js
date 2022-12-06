import { Component } from 'react'
import PropTypes from 'prop-types';

import { getTasks } from '../contracts/getTasks'
import { Task } from './task';
import { TabsTasks } from './tabs';
import { Tab } from '../tabs/tab';
import { AddTask } from './addTask'
import styles from './styles.css'

export class TaskList extends Component {
  static defaultProps = {
    title: '',
    index: 0,
    done: false,
  }

  static propTypes = {
    title: PropTypes.string,
    index: PropTypes.number,
    done: PropTypes.bool,
    buttons: PropTypes.element
  }

  state = {
    todos: []
  }

  originTodos = []
  daysOfTheWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]

  async getTasks() {
    this.originTodos = await getTasks()

    this.setState({ todos: this.originTodos })
  }

  componentDidMount() {
    this.getTasks()
  }

  completeTask = (todoIndex, index) => {
    this.state.todos[todoIndex][index].done = true

    this.setState({ todos: this.state.todos })
  }

  setInProgressTask = (todoIndex, index) => {
    this.state.todos[todoIndex][index].done = undefined

    this.setState({ todos: this.state.todos })
  }

  deleteTask = (todoIndex, index) => {
    this.state.todos[todoIndex][index].index = index

    this.setState({
      todos: this.state.todos.filter((todo) => todo.index !== index)
    })
  }

  render() {
    const { todos } = this.state

    return (
      <div className={styles.content} >
        <TabsTasks selectedIndex={new Date().getDay() - 1}>
          {
            this.daysOfTheWeek.map((day, todoIndex) =>
              <Tab key={todoIndex} title={`${day}`}>
                {
                  !todos.length ? <span>Loading...</span> :
                    todos[todoIndex].map((todo, index) =>
                      <Task key={index} index={index + 1} done={todo.done} title={todo.title} buttons={
                        <div className={styles.buttons} >
                          <a onClick={() => this.completeTask(todoIndex, index)}>done</a>
                          {todo.done === undefined ? '' : <a onClick={() => this.setInProgressTask(todoIndex, index)} className={styles.inProgress}>in progress</a>}
                          <a onClick={() => this.deleteTask(todoIndex, index)} className={styles.delete}>delete</a>
                        </div>
                      } />
                    )
                }
              </Tab>
            )
          }
        </TabsTasks>
        <AddTask />
      </div>
    )
  }
}
