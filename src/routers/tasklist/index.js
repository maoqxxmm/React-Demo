import React from 'react';
import { connect } from 'react-redux';
import Titlebar from './titlebar';
import QuickAdd from './quick-add';
import List from './list';

class Tasklist extends React.Component {

    render() {
        const { dispatch, taskList } = this.props;
        return (
            <div className="tasklist">
                <Titlebar projectName="收集箱"></Titlebar>
                <QuickAdd dispatch={dispatch}></QuickAdd>
                <List dispatch={dispatch} taskList={taskList}></List>
            </div>
        );
    }

}

const mapStateToProps = state => ({ ...state.tasks });

export default connect(mapStateToProps)(Tasklist);