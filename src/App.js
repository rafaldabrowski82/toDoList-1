import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    list: [],
  };

  render() {
    return (
        <div className="App">
          <div className="wrapper">
              <div className="header">
                  <h1>ToDo's</h1>
              </div>
              <section className="list">
                <p>lista</p>
              </section>
              <div className="main">
                  <div className="addTask">
                      <span><b>Add a new todo</b> ( press Enter to add ):</span>
                      <input type="text"/>
                  </div>
              </div>
          </div>
        </div>
    );
  }
}

export default App;
