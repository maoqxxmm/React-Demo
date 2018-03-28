import React from 'react';
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
                <Section type="todo" taskList={listMap.todo} dispatch={this.props.dispatch}></Section>
                <Section type="completed" taskList={listMap.completed} dispatch={this.props.dispatch}></Section>
            </div>
        );
    }
}

export default List;