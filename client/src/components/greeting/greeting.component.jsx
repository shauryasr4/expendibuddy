import React from 'react'
import './greeting.style.scss';

export const Greeting = (props) => {
    return (
        <div className='greeting-container' >
            {props.message}
        </div>
    )
}
