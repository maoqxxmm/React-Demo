import React from 'react';
import TaskItem from './task-item';

class Section extends React.Component {

    render() {
        const { taskList } = this.props;
        return (
            <section>
                {taskList && (this.props.taskList.map(task => {
                        return (
                            <TaskItem task={task} key={task.toObject().id}></TaskItem>
                        );
                    })
                )}
            </section>
        );
    }

}

export default Section;