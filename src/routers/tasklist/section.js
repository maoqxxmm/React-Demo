import React from 'react';
import TaskItem from './task-item';
import { Droppable } from 'react-beautiful-dnd';

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
                    <Droppable droppableId={this.props.type}>
                        {(provided, snapshot) => (
                            <ul
                                ref={provided.innerRef}
                            >
                                {taskList && (this.props.taskList.map((task, index) => {
                                        return (
                                            <TaskItem task={task} index={index} key={task.get('id')}></TaskItem>
                                        );
                                    })
                                )}
                            </ul>
                        )}
                    </Droppable>
                </section>
        );
    }

}

export default Section;