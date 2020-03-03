import React, { Component } from 'react';
import './App.css';
import ShowTasks from './components/ShowTasks';
import AddTask from "./components/AddTask";

class App extends Component {
  state = {
    newTask: '',
    tasks: [],
  };

  handleChange = (e) => {
      this.setState({
          ...this.state,
          newTask: e.target.value,
      })
  };

  handleSubmit = (e) => {
      e.preventDefault();
      const lengthOfList = this.state.tasks.length;
      const tasks = [...this.state.tasks, {id: lengthOfList + 1, value: this.state.newTask}];

      if(this.state.newTask === '') {
          this.setState({
              ...this.state
          })
      }
      else {
          this.setState({
              tasks,
              newTask: '',
          })
      }
  };

  handleDelete = (id) => {
    const tasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({
        ...this.state,
        tasks,
    })
  };

  render() {
    return (
        <div className="App">
          <div className="wrapper">
              <div className="header">
                  <h2>ToDo's</h2>
              </div>
              <section className="list">
                <ShowTasks list={this.state.tasks} delete={this.handleDelete} />
              </section>
              <div className="main">
                  <AddTask value={this.state.newTask} change={this.handleChange} submit={this.handleSubmit} />
              </div>
          </div>
        </div>
    );
  }
}

export default App;
