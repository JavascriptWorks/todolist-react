import React, {Component} from 'react';
import '../css/ToDoList.css';
import TaskItem from './TaskItem';
import FlipMove from 'react-flip-move';

class ToDoList extends Component {
    constructor(props, context) {
        super(props, context);
        this.taskItem = this.taskItem.bind(this);
    }

    taskItem(item) {
        return (
            <TaskItem
                key={item.time}
                item={item}
                editTask={this.props.editTask} 
                deleteTask={this.props.deleteTask}
                toggleTaskItemStatus={this.props.toggleTaskItemStatus} />            
        );
    }

    render() {
        let items = this.props.items;
        let taskItems = items.map(this.taskItem);
        return(
            <div>
                <ul className="ToDoList">
                    <FlipMove enterAnimation="fade">
                        {taskItems}
                    </FlipMove>
                </ul>
            </div>
        );
    }
}

export default ToDoList;