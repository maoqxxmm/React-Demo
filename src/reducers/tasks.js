import * as types from '../constants/ActionTypes';
import { List, Map } from 'immutable';
import { combineReducers } from 'redux';

function taskList(state = List(), action) {
    switch (action.type) {
        case (types.ADD_TASK):
            return state.push(Map({
                id: action.id,
                title: action.text,
                isCompleted: false
            }));

        default:
            return state;
    }
}

export default combineReducers({
    taskList,
})