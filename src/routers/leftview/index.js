import React from 'react';
import { connect } from 'react-redux';
import Toolbar from './toolbar';
import BaseList from './base-list';
import ProjectList from './project-list';

class LeftView extends React.Component {

    filterSection() {
        var sections = this.props.smartProjectList.groupBy(project => {
            const taskType = project.get('taskType');
            if (~['trash', 'completed'].indexOf(taskType)) {
                return 1
            }
            if (~['summary'].indexOf(taskType)) {
                return 2
            } else {
                return 0
            }
        })
        return sections;
    }

    render() {
        const listSections = this.filterSection()
        return (
            <div className="left-view">
                <Toolbar />
                <div className="lists">
                    <div className="project-list-inner">
                        <BaseList items={listSections.get(0)} />
                        <ProjectList />
                        <BaseList items={listSections.get(1)} />
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => ({ ...state.projects });

export default connect(mapStateToProps)(LeftView);