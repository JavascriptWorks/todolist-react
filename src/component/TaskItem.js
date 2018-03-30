import React, {Component} from 'react';
import TaskState from './../util/TaskState';
import EditImage from './../image/edit-512.png';
import DeleteImage from './../image/delete-512.png';

class TaskItem extends Component {   
    constructor(props, context) {
        super(props, context);
        this.isChecked = this.isChecked.bind(this);
    }

    isChecked(status) {
        return status===TaskState.DONE ? true : false;
    }

    editTask(e) {
        console.log("Edit task to be implemented");
        e.preventDefault();
    }

    render() {
        const item = this.props.item;
        const checked = this.isChecked(item.status) ? 'checked' : '';
        const imageStyle = {
            height: '20px',
            width: '20px',
            verticalAlign: 'middle'
        };
        const buttonStyle = {
            position: 'absolute', 
            right: 10,
        };
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
                <span style={buttonStyle}>
                    <button onClick={this.editTask}><img src={EditImage} alt="Edit" style={imageStyle} /></button>                
                    <button onClick={()=>this.props.deleteTask(item.time)}><img src={DeleteImage} alt="Delete" style={imageStyle} /></button>                
                </span>
            </li>
        );
    }
}

export default TaskItem;