import { combineReducers } from 'redux';
import tasks from './tasks';
import projects from './projects';
import groups from './groups';

export default combineReducers({
    tasks,
    projects,
    groups
});