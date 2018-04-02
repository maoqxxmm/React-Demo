import React from 'react'
import { connect, Map } from 'react-redux';
import BaseItem from './base-item'
import GroupList from './group'
import sort from '../../utils/sort'

class ProjectList extends React.Component {

  getBuiltList () {
    var projectList = this.props.projectList
    var groupList = this.props.groupList
    var normalProjectList = projectList.filter(p => {
      return !p.get('groupId') && !p.get('closed')
    })
    groupList.forEach(g => {
      var subList = projectList.filter(p => {
        return p.get('groupId') === g.get('id') && !p.get('closed')
      })
      subList.sort(sort.sortOrder)
      g.subList = subList
    })
    return normalProjectList.concat(groupList).sort(sort.sortOrder)
  }

  getClosedList () {
    return this.props.projectList.filter(p => {
      return p.get('closed')
    })
  }

  render () {
    const builtList = this.getBuiltList()
    const closedList = this.getClosedList()
    return (
      <section>
        <div className="project-list">
          <ul className="project-ul">
          {builtList.map(item => {
              if (item.isGroup) {
                return <GroupList group={item} key={item.get('id')} />
              } else {
                return <BaseItem item={item} key={item.get('id')} />
              }
            }
          )}
          </ul>
        </div>
        <div className="l-divider"></div>
      </section>
    )
  }
}

const mapStateToProps = state => ({ ...state.projects, ...state.groups });

export default connect(mapStateToProps)(ProjectList);