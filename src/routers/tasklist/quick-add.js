import React from 'react';
import { addTask } from '../../actions/tasks';

class QuickAdd extends React.Component {

    shouldComponentUpdate() {
        return false;
    }

    handleKeydown(e) {
        if (e.keyCode === 13) {
            this.addTodo(e);
        }
    }

    addTodo(e) {
        e.preventDefault();
        const value = this.$input.innerText;
        if (value) {
            this.props.dispatch(addTask(value));
            this.$input.innerText = '';
        }
    }

    render() {
        return (
            <div contentEditable="true" className="task-input" placeholder="添加任务至收集箱，回车即可保存" onKeyDown={e => this.handleKeydown(e)} ref={input => this.$input = input}></div>
        );
    }

}

export default QuickAdd;