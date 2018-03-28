import React from 'react';
import cn from 'classnames';
import ContentEditable from 'react-contenteditable'
import { toggleCompleteTask, updateTaskTitle } from '../../actions/tasks';

class TaskItem extends React.Component {

    render() {
        const { id, title, status } = this.props.task.toObject();
        const classNames = cn('task-item', {
            completed: status > 0
        })
        return (
            <li className={classNames}>
                <button className="check-toggle" onClick={() => this.props.dispatch(toggleCompleteTask(id))}></button>
                <ContentEditable className="title" html={title} onChange={(e) => this.props.dispatch(updateTaskTitle(id, e.target.value))}></ContentEditable>
            </li>
        );
    }

}

export default TaskItem;