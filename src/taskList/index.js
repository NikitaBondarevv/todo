import { Component } from "react";

import styles from './styles.css';

class Tasks extends Component {
  componentWillUnmount() {
    console.log('delete!!!');
  }

  render() {
    const { id, completed, title, buttons } = this.props;

    return (
      <li key={id} className={completed === true ? styles.completed : styles.tasks}>
        <span className={completed === true ? styles.done : styles.waiting}></span>
        <p>{`${id}. ${title}`}</p>
        {buttons}
      </li>
    )
  }
}

export class TaskList extends Component {
  state = {
    todos: [],
    completed: true,
    progress: 'progress',
    deleteTask: 'delete'
  }

  async getTasks() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();

    this.setState({ todos });
  }

  componentDidMount() {
    this.getTasks();
  }

  completedTask = (id) => {
    this.setState({ completed: this.state.completed })

    if (this.state.todos[id].completed !== true) {
      this.state.todos[id].completed = this.state.completed
    }
  }

  inProgressTask = ({ target }, id) => {
    this.setState({ progress: this.state.progress });

    if (!this.state.todos[id].completed) {
      this.state.todos[id].completed = this.state.progress;
      target.parentNode.parentNode.classList.add(styles.taskInProgress);
      document.querySelectorAll('li span')[id].classList.add(styles.progress);
    }
  }

  deleteTask = (id) => {
    this.setState({
      deleteTask: this.state.deleteTask,
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    const { todos, progress } = this.state;

    return (
      <ul className={styles.ul}>
        {
          todos.map((todo, index) =>
            <Tasks key={index} id={index + 1} completed={todo.completed} title={todo.title} buttons={
              <div className={styles.buttons} >
                <a onClick={e => this.completedTask(index)}></a>
                {todo.completed === progress ? '' : <a onClick={e => this.inProgressTask(e, index)} className={styles.inProgress}></a>}
                <a onClick={e => this.deleteTask(todo.id)} className={styles.delete}></a>
              </div>
            } />
          )
        }
      </ul>
    )
  }
}
