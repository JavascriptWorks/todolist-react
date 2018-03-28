import React, {Component} from 'react';
import '../css/ToDoList.css';

class ToDoList extends Component {
    constructor(props, context) {
        super(props, context);
        this.taskItem = this.taskItem.bind(this);
    }

    taskItem(item) {
        return (
            <li key={item.time} className={item.status}>
                {item.task}
            </li>
        );
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