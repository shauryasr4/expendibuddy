import React from 'react';
import './card-container.style.scss';

export const Card = (props) => {
    const {hollow} = props;
    return (
        <div className={'card-container '+(hollow?'hollow':'')}>
            {props.children}
        </div>
    )
}
