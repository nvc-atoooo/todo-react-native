import { connect } from 'react-redux';
import Completed from './Completed';

const getCompleted = (tasks) => {
    return tasks.filter(t => t.completed)
  }

const mapStateToProps = state => ({
    tasks: getCompleted(state.tasks)
})

export default connect(mapStateToProps, null)(Completed);