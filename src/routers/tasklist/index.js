import React from 'react';
import { connect } from 'react-redux';
import Titlebar from './titlebar';
import QuickAdd from './quick-add';
import List from './list';

class Tasklist extends React.Component {

    render() {
        const { dispatch, match, projectList, smartProjectList } = this.props;
        const pList = projectList.concat(smartProjectList);
        const isSmartList = match.params.name === 'all';
        const projectId = isSmartList ? match.params.type : match.params.name;
        const project = pList.find(p => {
            return p.get('id') === projectId;
        });
        const projectName = project ? project.get('name') : '收集箱';

        return (
            <div className="tasklist">
                <Titlebar projectName={projectName}></Titlebar>
                <QuickAdd dispatch={dispatch}></QuickAdd>
                <List projectId={projectId}></List>
            </div>
        );
    }

}

const mapStateToProps = state => ({ ...state.projects });

export default connect(mapStateToProps)(Tasklist);