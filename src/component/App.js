import React, { Component } from 'react';
import ToDoList from './ToDoList';
// import TaskState from '../util/ToDoTaskStates';
import logo from './../image/logo.svg';
import '../css/App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.addItem = this.addItem.bind(this);
  }

  state = {
    items: []
  };

  addItem(event) {
    event.preventDefault();
    let newTaskItem = this._newTaskInput.value.trim();
    if(newTaskItem !== "") {
      let items = this.state.items;
      items.push({
        time: Date.now(),
        task: newTaskItem,
        status: "ToDo"
      });
      this.setState({items});
      console.log(this.state.items);
    }
    this._newTaskInput.value = "";
    this._newTaskInput.focus();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Just Keep Doing And All Of It Will Be Done.</h1>
          <div>
            <form onSubmit={this.addItem}>
              <input type="text" placeholder="Add task" ref={(ele)=>this._newTaskInput=ele} className="ToDoInput"/>
              <button type="submit" className="ToDoSubmit">Add task</button>
            </form>
          </div>
        </header>
        <div className="App-intro">
          <ToDoList items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default App;
