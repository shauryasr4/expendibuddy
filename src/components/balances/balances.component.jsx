import React from 'react';
import './balances.style.scss';
import { Card } from '../card-container/card-container.component';

export const Balance = () => {
    return (
        <div className='balances-container'>
            <Card hollow>
                <div className='balances-info'>
                    <div className='incoming'>
                        <span className='label'>
                            Income
                        </span>
                        $500
                    </div>
                    <div className='divider'>
                    </div>
                    <div className='outgoing'>
                        <span className='label'>
                            Expense
                        </span>
                        $100
                    </div>
                </div>
            </Card>
        </div>
    )
}
