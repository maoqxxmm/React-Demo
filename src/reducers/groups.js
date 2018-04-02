import * as types from '../constants/ActionTypes';
import { List, Map } from 'immutable';
import { combineReducers } from 'redux';

function arrayToMap (array) {
    return array.map(object => {
        return Map(object)
    })
}

const GroupCollection = [
    {
        id: "57e1a52f515073048b1cb629",
        etag: "0f7suqgd",
        name: "新文件夹",
        showAll: true,
        sortOrder: 6597069766656,
        deleted: 0,
        userId: 3,
        sortType: "sortOrder"
        },
        {
        id: "5a28fd4b4b33e339012103b4",
        etag: "l0khmomv",
        name: "New Folder",
        showAll: true,
        sortOrder: 21990232555520,
        deleted: 0,
        userId: 3,
        sortType: "sortOrder"
    }
]
function groupList(state = List(arrayToMap(GroupCollection)), action) {
    switch (action.type) {
        case (types.ADD_GROUP):
            return state.push(Map({
                id: action.id,
                title: action.text,
                status: 0
            })); 
        default:
            return state;
    }
}

export default combineReducers({
    groupList
})