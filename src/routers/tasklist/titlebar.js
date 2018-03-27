import React from 'react';

class Titlebar extends React.Component {

    render() {
        return (
            <header>
                <h1>{this.props.projectName}</h1>
            </header>
        );
    }

}

export default Titlebar;