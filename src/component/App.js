import React, { Component } from 'react';
import ToDoList from './ToDoList';
import EditTaskModal from './EditTaskModal';
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
    this.modifyTask = this.modifyTask.bind(this);
    this.openModalModifyTask = this.openModalModifyTask.bind(this);
    this.closeModalModifyTask = this.closeModalModifyTask.bind(this);
  }

  state = {
    items: [],
    editableTask: {},
    showModalEditTask: false
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

  modifyTask(time,task) {
    let itemsCopy = this.state.items.slice();
    let index = this.state.items.findIndex((item)=>item.time===time);
    if(index>=0) {
      itemsCopy[index].task = task;
      this.setState(itemsCopy);
    }
  }

  openModalModifyTask(time, task) {
    console.log(`In App coponent, time: ${time}, task is ${task}`);
    this.setState({
      editableTask: {time,task},      
      showModalEditTask: true
    });
  }

  closeModalModifyTask() {
    this.setState({showModalEditTask: false});
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
            editTask={this.openModalModifyTask}
            deleteTask={this.deleteItem}
            toggleTaskItemStatus={this.toggleTaskItemStatus} />
            <EditTaskModal
          save={this.modifyTask} 
          editableTask={this.state.editableTask}
          isOpen={this.state.showModalEditTask}
          onRequestClose={this.closeModalModifyTask} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    this._newTaskInput.focus();
  }
}

export default App;
