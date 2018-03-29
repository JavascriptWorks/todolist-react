import React, { Component } from 'react';
import ToDoList from './ToDoList';
// import TaskState from '../util/ToDoTaskStates';
import {TODO, DONE} from './../util/constants.js';
import logo from './../image/logo.svg';
import '../css/App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.addItem = this.addItem.bind(this);
    this.toggleTaskItemStatus = this.toggleTaskItemStatus.bind(this);
    this.toggleState = this.toggleState.bind(this);
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
        status: TODO
      });
      this.setState({items});
      console.log(this.state.items);
    }
    this._newTaskInput.value = "";
    this._newTaskInput.focus();
  }

  toggleTaskItemStatus(time) {
    console.log("In toggleTaskItemStatus()..");
    var items = this.state.items.filter((item)=>{
      if(item.time===time) item.status = this.toggleState(item.status);
      return item;
    });
    console.log(items);
    this.setState({items:this.state.items});
  }

  toggleState(state) {
    console.log(`state = ${state}`);
    if(state === TODO) return DONE;
    return TODO;
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
          <ToDoList 
            items={this.state.items} 
            toggleTaskItemStatus={this.toggleTaskItemStatus} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    this._newTaskInput.focus();
  }
}

export default App;
