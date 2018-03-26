import * as types from '../constants/ActionTypes';
import { List, Map } from 'immutable';
import { combineReducers } from 'redux';

function todoList(state = List(), action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default combineReducers({
    todoList,
})