import React, {Component} from 'react';
import '../css/ToDoList.css';
import {DONE} from './../util/constants.js';

class ToDoList extends Component {
    constructor(props, context) {
        super(props, context);
        this.taskItem = this.taskItem.bind(this);
        this.changeTaskItemStatus = this.changeTaskItemStatus.bind(this);
        this.isChecked = this.isChecked.bind(this);
    }

    taskItem(item) {
        console.log("In taskItem(..)");
        console.log(item);
        console.log(item.status===DONE);
        console.log(this.isChecked(item.status));
        return (
            <li key={item.time} className={item.status}>
                <input 
                    type="checkbox" 
                    className={item.status}                    
                    defaultChecked={()=>this.isChecked(item.status)}
                    onChange={(e) => this.changeTaskItemStatus(e, item.time)} />
                {item.task}                
            </li>
        );
    }

    isChecked(status) {
        return status===DONE ? true : false;
    }

    changeTaskItemStatus(eve, time) {
        console.log(time);
        this.props.toggleTaskItemStatus(time);
        // eve.preventDefault(); //Input being uncontrolled HTML element (having its internal state), having preventDefault is error prone
    }

    render() {
        let items = this.props.items;
        let taskItems = items.map(this.taskItem);
        return(
            <div>
                <ul className="ToDoList">
                    {taskItems}
                </ul>
            </div>
        );
    }
}

export default ToDoList;