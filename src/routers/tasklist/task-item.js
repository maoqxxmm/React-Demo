import React from 'react';

class TaskItem extends React.Component {

    render() {
        const { id, title, isCompleted } = this.props.task.toObject();
        return (
            <li className="task-item">
                {title}
            </li>
        );
    }

}

export default TaskItem;