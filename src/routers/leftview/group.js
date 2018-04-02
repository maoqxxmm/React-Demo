import React from 'react'
import BaseItem from './base-item'
import cn from 'classnames'

class GroupList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      isOpen: false
    };
    this.handleClick = () => {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }));
    }
  }
  render () {
    const { group } = this.props
    const containerCN = cn('g-container', {
        open: this.state.isOpen
    })
    return (
      <li className="l-group">
        <div className={ containerCN }>
          <div className="g-header" onClick={this.handleClick}>
            {
              this.state.isEditing && 
              <input type="text" className="input-sml title-edit" value="" maxLength="30" />
            }
            <span title={ group.get('name') } className="l-title">{ group.get('name') }</span>
          </div>
          <ul className="g-project-ul">
            {group.subList && (group.subList.map(item => {
                return (
                    <BaseItem item={item} key={item.get('id')} />
                );
              })
            )}
          </ul>
        </div>
      </li>
    )
  }
}

export default GroupList;