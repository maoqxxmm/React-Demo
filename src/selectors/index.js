import { createSelector } from 'reselect';
import * as utils from '../utils';
import * as string from '../utils/string';

const getAllTasks = (state) => state.tasks.taskList;

const getTasksInProject = (state, props) => state.tasks.taskList.filter(task => {
    return task.get('projectId') === props.projectId;
})

const getProjects = (state) => state.projects.projectList;

export const getAllTodoTasks = createSelector(
    [getAllTasks, getProjects],
    (tasks, projects) => {
        const notShowInAllIds = _getNotShowInAllIds(projects);
        const closedIds = _getClosedIds(projects);
        return tasks.filter(task => {
            if (_notInSmartProject(task, projects, closedIds, notShowInAllIds)) {
                return false;
            }
            return true;
        })
    }
)

export const getTodayAndOverdueTasks = createSelector(
    [getAllTasks, getProjects],
    (tasks, projects) => {
        const notShowInAllIds = _getNotShowInAllIds(projects);
        const closedIds = _getClosedIds(projects);
        return tasks.filter(task => {
            if (_notInSmartProject(task, projects, closedIds, notShowInAllIds)) {
                return false;
            }
            if (_isCompleted(task)) {
                return utils.getCompletedTimeOffsetDays(task) === 0;
            } else {
                if (_noDuedate(task)) return false;
                return utils.getOffsetDays(task) <= 0;
            }
        })
    }
)

export const getTomorrowTasks = createSelector(
    [getAllTasks, getProjects],
    (tasks, projects) => {
        const notShowInAllIds = _getNotShowInAllIds(projects);
        const closedIds = _getClosedIds(projects);
        return tasks.filter(task => {
            if (_notInSmartProject(task ,projects, closedIds, notShowInAllIds)) {
                return false;
            }
            if (_noDuedate(task)) {
                return false;
            }
            const dayOffset = utils.getOffsetDays(task);
            const dueDateOffset = utils.getOffsetDueDateDays(task);
            return dayOffset === 1 || (dayOffset <= 0 && dueDateOffset >= 1);
        })
    }
)

export const getTodoTasksInProject = createSelector(
    [getTasksInProject],
    (tasks) => {
        return tasks;
    }
)

const _getNotShowInAllIds = (projects) => {
    return projects.filter(p => p.get('inAll') === false).map(p => p.get('id'));
}

const _getClosedIds = (projects) => {
    return projects.filter(p => p.get('closed') === true).map(p => p.get('id'));
}

const _notInSmartProject = (task, projects, closedIds, notShowInAllIds) => {
    if (_isClosed(task, closedIds)) {
        return true;
    }
    const project = projects.filter(p => p.get('id') === task.get('projectId'));
    if (_notInAll(task, notShowInAllIds) && _taskAssignedMe(task, project)) {
        return true;
    }
    return false;
}

const _isClosed = (task, closedIds) => {
    if (_isDeleted(task)) {
        return true;
    }
    const projectId = task.get('projectId');
    if (projectId) {
        return closedIds.includes(projectId);
    } else {
        if (_isSubscribe(task)) {
            return false;
        } else {
            return true;
        }
    }
}

const _notInAll = (task, notShowInAllIds) => {
    const projectId = task.get('projectId');
    return notShowInAllIds.includes(projectId);
}

const _taskAssignedMe = (task, project) => {
    if (!_isShared(task, project)) return false;
    // @maoq todo
    return task.get('assignee') === '123';
}

const _isShared = (task, project) => {
    if (project) {
        return project.get('userCount') > 1;
    }
}

const _isSubscribe = (task) => {
    return task.get('projectId') === 'subscribe-calendar' || task.get('id').match(/google.com/);
}

const _isDeleted = (task) => {
    return task.get('deleted') > 0;
}

const _isCompleted = (task) => {
    return task.get('status') > 0;
}

const _noDuedate = (task) => {
    return !string.isValidDate(task.get('startDate'));
}