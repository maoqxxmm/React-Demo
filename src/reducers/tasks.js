import * as types from '../constants/ActionTypes';
import { List, Map } from 'immutable';
import { combineReducers } from 'redux';

function taskList(state = List(), action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default combineReducers({
    taskList,
})