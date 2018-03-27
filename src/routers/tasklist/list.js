import React from 'react';
import Section from './section';

class List extends React.Component {

    filterTaskList() {
        return this.props.taskList;
    }

    render() {
        const taskList = this.filterTaskList();
        return (
            <div>
                {!!taskList.size && (
                    <ul className="list-group">
                        {
                            <Section taskList={taskList}></Section>
                        }
                    </ul>
                )}
            </div>
        );
    }
}

export default List;