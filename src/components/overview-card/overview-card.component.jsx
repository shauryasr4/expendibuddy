import React from 'react'
import './overview-card.style.scss';
import { Card } from '../card-container/card-container.component';



export const Overview = (props) => {
    return (
        <div className='overview-card'>
            <Card hollow>
                <div className='overview-info'>
                    <div className='amount-display'>
                        <span className={'overview-amount '+(props.balance<0?'green':'')}> 
                            ${props.balance} 
                        </span>
                        <span className='overview-desc'> Your Total Expenditure </span>
                    </div> 
                    <div className='show-transactions'>
                        View All
                    </div>
                </div>
            </Card>
        </div>
    )
}
