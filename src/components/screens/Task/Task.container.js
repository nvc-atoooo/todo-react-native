import React from 'react';
import Task from './Task';
import { connect } from 'react-redux';
import { addTask, toggleTask } from '../../../actions';

class TaskContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
    }
    
    changeTextHandler = text => {
        console.log(this.state);
        this.setState({ text });
    };

    addTask = () => {
        let notEmpty = this.state.text.trim().length > 0;

        if (notEmpty) {
            this.setState({text: ""});
            this.props.addTask(this.state.text);
        }
    };

    render() {
        return (
            <Task {...this.state}
                tasks={this.props.tasks}
                toggleTask={this.props.toggleTask}
                changeTextHandler={this.changeTextHandler}
                addTask={this.addTask}
                />
        );
    }
}

const mapStateToProps = state => ({
    tasks: state.tasks
})

export default connect(mapStateToProps, {addTask, toggleTask})(TaskContainer);