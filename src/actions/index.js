let nextTodoId = 2

export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export const addTask = text => ({
  type: ADD_TASK,
  id: nextTodoId++,
  text
})

export const toggleTask = id => ({
  type: TOGGLE_TASK,
  id
})
