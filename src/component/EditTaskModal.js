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
        this.setState({task: event.target.value});
    }

    modifyTask(event) {
        event.preventDefault();
        this.props.save(this.props.editableTask.time, this.state.task);
        this.props.onRequestClose();
    }

    resetTaskValue() {
        this.setState({task: this.props.editableTask.task});
        this._inputEdit.focus();
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
                <form onSubmit={(e)=>this.modifyTask(e)}>
                    <input 
                        className="ToDoInput"
                        value={this.state.task} 
                        onLoad={this.handleInitTaskValue}
                        onChange={this.handleEditingTask}
                        ref={(el)=>this._inputEdit=el} />
                    <button type="submit" className="ToDoSubmit"> Edit </button>
                </form>
            </ReactModal>
        );
    }
}

export default EditTaskModal;