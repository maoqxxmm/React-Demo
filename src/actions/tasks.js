import * as types from '../constants/ActionTypes';

let idCounter = 0;

export const addTask = text => ({
    type: types.ADD_TASK,
    text,
    id: ++idCounter
})

export const toggleCompleteTask = id => ({
    type: types.TOGGLE_COMPLETE_TASK,
    id
})

export const updateTaskTitle = (id, title) => ({
    type: types.UPDATE_TASK_TITLE,
    id,
    title
})

export const deleteTask = (id) => ({
    type: types.DELETE_TASK,
    id
})