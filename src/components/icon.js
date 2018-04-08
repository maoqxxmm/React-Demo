import React from 'react';
import '../assets/icons.svg';

const Icon = (props) => (
    <svg className={`icon icon-${props.name}`}>
        <use xlinkHref={`#icons_${props.name}`}></use>
    </svg>
)

export default Icon;