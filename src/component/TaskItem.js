import React, {Component} from 'react';
import TaskState from './../util/TaskState';

class TaskItem extends Component {   
    constructor(props, context) {
        super(props, context);
        this.changeTaskItemStatus = this.changeTaskItemStatus.bind(this);
        this.isChecked = this.isChecked.bind(this);        
    }

    isChecked(status) {
        return status===TaskState.DONE ? true : false;
    }

    changeTaskItemStatus(eve, time) {
        this.props.toggleTaskItemStatus(time);
        // eve.preventDefault(); //Input being uncontrolled HTML element (having its internal state), having preventDefault is error prone
    }

    render() {
        const item = this.props.item;
        const checked = this.isChecked(item.status) ? 'checked' : '';
        return (
            <li key={item.time} className={item.status}>
                <input 
                    type="checkbox"
                    value={item.time} 
                    className={item.status}                    
                    defaultChecked={checked}
                    onChange={(e) => this.changeTaskItemStatus(e, item.time)} />
                {item.task}                
            </li>
        );
    }
}

export default TaskItem;