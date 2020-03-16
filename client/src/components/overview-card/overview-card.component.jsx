import React, {useContext} from 'react'
import './overview-card.style.scss';
import { Card } from '../card-container/card-container.component';

import {TransactionContext} from '../../context/transactions.context';

export const Overview = (props) => {

    const { transactions } = useContext(TransactionContext);

    const getTotalExpenditure = function() {
        return transactions.reduce((acc, {amount}) => acc+amount, 0);
    }

    const totalExpenditure = getTotalExpenditure();

    return (
        <div className='overview-card'>
            <Card hollow>
                <div className='overview-info'>
                    <div className='amount-display'>
                        <span className={'overview-amount '+(totalExpenditure>0?'green':'')}> 
                            ${totalExpenditure} 
                        </span>
                        <span className='overview-desc'> 
                            Your Total Expenditure 
                        </span>
                    </div> 
                    <div className='show-transactions'>
                        View All
                    </div>
                </div>
            </Card>
        </div>
    )
}
