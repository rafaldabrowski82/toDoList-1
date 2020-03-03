import React, { Component } from 'react';
import './App.css';
import ShowList from './components/ShowList';
import AddTask from "./components/AddTask";

class App extends Component {
  state = {
    newTask: '',
    list: [],
  };

  handleChange = (e) => {
      this.setState({
          ...this.state,
          newTask: e.target.value,
      })
  };

  handleSubmit = (e) => {
      e.preventDefault();
      const lengthOfList = this.state.list.length;
      const list = [...this.state.list, {id: lengthOfList + 1, value: this.state.newTask}];
      this.setState({
          list,
          newTask: '',
      })
  };

  handleDelete = (id) => {
    const list = this.state.list.filter(task => task.id !== id);
    this.setState({
        ...this.state,
        list,
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
                <ShowList list={this.state.list} delete={this.handleDelete} />
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
