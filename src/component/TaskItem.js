import React, {Component} from 'react';
import TaskState from './../util/TaskState';

class TaskItem extends Component {   
    constructor(props, context) {
        super(props, context);
        this.isChecked = this.isChecked.bind(this);        
    }

    isChecked(status) {
        return status===TaskState.DONE ? true : false;
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
                    onChange={() => this.props.toggleTaskItemStatus(item.time)} 
                    />
                {item.task}                
            </li>
        );
    }
}

export default TaskItem;