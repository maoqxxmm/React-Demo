import React from 'react'
import BaseItem from './base-item'

class BaseList extends React.Component {

  render () {
    const { items } = this.props;
    return (
      <section>
        <ul>
            {items && (this.props.items.map(item => {
                return (
                    <BaseItem item={item} key={item.get('id')} />
                );
              })
            )}
        </ul>
        <div className="l-divider"></div>
      </section>
    )
  }
}

export default BaseList;