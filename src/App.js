import React, { Component } from 'react';
import './App.css';
import ShowList from './components/ShowList';
import AddTask from "./components/AddTask";

class App extends Component {
  state = {
    list: [
        {id: 1, value: 'pierwsze zadanie'},
        {id: 2, value: 'drugie zadanie'},
    ],
  };

  render() {
    return (
        <div className="App">
          <div className="wrapper">
              <div className="header">
                  <h2>ToDo's</h2>
              </div>
              <section className="list">
                <ShowList list={this.state.list} />
              </section>
              <div className="main">
                  <AddTask list={this.state.list} />
              </div>
          </div>
        </div>
    );
  }
}

export default App;
