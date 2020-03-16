import React from 'react'
import './container.style.scss';

export const Container = (props) => {
    return (
        <div className='app-container'>
            {props.children}
        </div>
    )
}
