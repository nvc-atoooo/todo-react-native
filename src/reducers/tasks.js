import { ADD_TASK, TOGGLE_TASK } from '../actions';

const INIT_TASK_STATE = [
  {
    id: 0,
    text: 'Task active',
    completed: false
  },
  {
    id: 1,
    text: 'Task completed',
    completed: true
  }
]

const tasks = (state = INIT_TASK_STATE, action) => {
    switch (action.type) {
      case ADD_TASK:
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case TOGGLE_TASK:
        return state.map(task =>
          (task.id === action.id)
            ? {...task, completed: !task.completed}
            : task
        )
      default:
        return state
    }
  }
  
  export default tasks
  