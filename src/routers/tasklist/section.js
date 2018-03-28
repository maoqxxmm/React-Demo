import React from 'react';
import TaskItem from './task-item';

class Section extends React.Component {

    render() {
        const { type, taskList } = this.props;
        var sectionName;
        switch (type) {
            case 'completed':
                sectionName = '已完成';
                break;
            default:
                sectionName = '未完成';
                break;
        }
        return (
            <section>
                <h3>{sectionName}</h3>
                <ul>
                    {taskList && (this.props.taskList.map(task => {
                            return (
                                <TaskItem dispatch={this.props.dispatch} task={task} key={task.get('id')}></TaskItem>
                            );
                        })
                    )}
                </ul>
            </section>
        );
    }

}

export default Section;