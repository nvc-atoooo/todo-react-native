import { connect } from 'react-redux';
import Active from './Active';

const getActive = (tasks) => {
    return tasks.filter(t => !t.completed)
  }

const mapStateToProps = state => ({
    tasks: getActive(state.tasks)
})

export default connect(mapStateToProps, null)(Active);