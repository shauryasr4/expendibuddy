import React from 'react';
import './header.style.scss';
import { Card } from '../card-container/card-container.component';

export const Header = () => {
    return (
        <Card hollow>
            <div className='header-card'>
                ExpendiBuddy
            </div>
        </Card>
    )
}
