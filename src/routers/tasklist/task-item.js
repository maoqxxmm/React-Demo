import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import ContentEditable from 'react-contenteditable'
import { toggleCompleteTask, updateTaskTitle, deleteTask } from '../../actions/tasks';
import { Draggable } from 'react-beautiful-dnd';
import Icon from '../../components/icon';

class TaskItem extends React.Component {

    render() {
        const { id, title, status } = this.props.task.toObject();
        const classNames = cn('task-item', {
            completed: status > 0
        })
        return (
            <Draggable draggableId={id} index={this.props.index}>
                {(provided, snapshot) => (
                    <li className={classNames}>
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        >
                            <button className="check-toggle" onClick={() => this.props.onToggleTask(id)}></button>
                            <ContentEditable className="title" html={title} onChange={(e) => this.props.onUpdateTitle(id, e.target.value)}></ContentEditable>
                            <button className="delete-task" onClick={() => this.props.onDeleteTask(id)}>X</button>
                            <Icon name="attachment"></Icon>
                        </div>
                        {provided.placeholder}
                    </li>
                )}
            </Draggable>
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