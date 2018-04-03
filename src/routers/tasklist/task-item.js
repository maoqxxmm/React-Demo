import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import ContentEditable from 'react-contenteditable'
import { toggleCompleteTask, updateTaskTitle, deleteTask } from '../../actions/tasks';

class TaskItem extends React.Component {

    render() {
        const { id, title, status } = this.props.task.toObject();
        const classNames = cn('task-item', {
            completed: status > 0
        })
        return (
            <li className={classNames}>
                <button className="check-toggle" onClick={() => this.props.onToggleTask(id)}></button>
                <ContentEditable className="title" html={title} onChange={(e) => this.props.onUpdateTitle(id, e.target.value)}></ContentEditable>
                <button className="delete-task" onClick={() => this.props.onDeleteTask(id)}>X</button>
            </li>
        );
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onToggleTask: (id) => {
            dispatch(toggleCompleteTask(id))
        },
        onUpdateTitle: (id, value) => {
            dispatch(updateTaskTitle(id, value))
        },
        onDeleteTask: (id) => {
            dispatch(deleteTask(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(TaskItem);