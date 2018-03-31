import React, {Component} from 'react'; 
import ReactModal from 'react-modal';

class EditTaskModal extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            task: props.editableTask.task
        };
        this.modifyTask=this.modifyTask.bind(this);
        this.handleEditingTask=this.handleEditingTask.bind(this);
        this.resetTaskValue=this.resetTaskValue.bind(this);
    }

    handleInitTaskValue() {
        this.setState({task: this.props.editableTask.task});
    }

    handleEditingTask(event) {
        console.log(`In handleEditingTask(), new task value : ${event.target.value}`);
        this.setState({task: event.target.value});
    }

    modifyTask() {
        console.log(`Inside EditTaskModal component, TaskTime:${this.props.editableTask.time} has new value: ${this.state.task}`);
        this.props.save(this.props.editableTask.time, this.state.task);
        this.props.onRequestClose();
    }

    resetTaskValue() {
        this.setState({task: this.props.editableTask.task});
    }

    render() {
        return (            
            <ReactModal 
              isOpen={this.props.isOpen}
              onAfterOpen={this.resetTaskValue}
              onRequestClose={this.props.onRequestClose}
              shouldFocusAfterRender={true}
              shouldCloseOnOverlayClick={true}
              shouldCloseOnEsc={true}
              shouldReturnFocusAfterClose={true}>
                <input 
                  value={this.state.task} 
                  onLoad={this.handleInitTaskValue}
                  onChange={this.handleEditingTask}/>
                <button onClick={()=>this.modifyTask()}>Edit</button>
            </ReactModal>
        );
    }
}

export default EditTaskModal;