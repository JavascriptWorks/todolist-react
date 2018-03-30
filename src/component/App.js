import React, { Component } from 'react';
import ToDoList from './ToDoList';
import TaskState from './../util/TaskState';
import logo from './../image/logo.svg';
import '../css/App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.addItem = this.addItem.bind(this);
    this.toggleTaskItemStatus = this.toggleTaskItemStatus.bind(this);
    this.toggleState = this.toggleState.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
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
        status: TaskState.TODO
      });
      this.setState({items});
    }
    this._newTaskInput.value = "";
    this._newTaskInput.focus();
  }

  deleteItem(time) {
    let filteredItems = this.state.items.filter((item)=>item.time!==time);
    this.setState({items:filteredItems});
  }

  toggleTaskItemStatus(time) {
    this.state.items.filter((item)=>{
      if(item.time===time) item.status = this.toggleState(item.status);
      return item;
    });
    this.setState({items:this.state.items});
  }

  toggleState(state) {
    if(state === TaskState.TODO) return TaskState.DONE;
    return TaskState.TODO;
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
            deleteTask={this.deleteItem}
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
