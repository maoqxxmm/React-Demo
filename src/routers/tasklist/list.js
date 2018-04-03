import React from 'react';
import { connect } from 'react-redux';
import { getAllTodoTasks, getTodoTasksInProject, getTodayAndOverdueTasks, getTomorrowTasks } from '../../selectors';
import Section from './section';

class List extends React.Component {

    filterTaskList() {
        var listMap = {
            todo: [],
            completed: [],
        };
        this.props.taskList.forEach(task => {
            const { status } = task.toObject();
            if (status === 0) {
                listMap.todo.push(task);
            } else {
                listMap.completed.push(task);
            }
        })
        return listMap;
    }

    render() {
        const listMap = this.filterTaskList();
        return (
            <div>
                <Section type="todo" taskList={listMap.todo}></Section>
                <Section type="completed" taskList={listMap.completed}></Section>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        taskList: getTaskListByProjectId(props.projectId, state, props)
    };
};

const getTaskListByProjectId = (projectId, state, props) => {
    switch (projectId) {
        case 'tasks':
            return getAllTodoTasks(state, props);
        case 'today':
            return getTodayAndOverdueTasks(state, props);
        case 'tomorrow':
            return getTomorrowTasks(state, props);
        default:
            return getTodoTasksInProject(state, props);
    }
}

export default connect(mapStateToProps)(List);