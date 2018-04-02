import React from 'react';
import { NavLink as Link } from 'react-router-dom'

class BaseItem extends React.Component {

    render() {
        const { id, name, listType, taskType } = this.props.item.toObject();
        let pathname = (listType === 'non-project') ?
          ('/q/all/' + taskType) : 
          ('/p/' + id + '/task')
        
        return (
            <li className="base-item">
              <Link to={{ pathname }}>
                <span className="l-title">{ name }</span>
              </Link>
            </li>
        );
    }

}

export default BaseItem;