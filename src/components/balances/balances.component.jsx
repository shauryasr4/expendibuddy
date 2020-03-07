import React, {useContext} from 'react';
import './balances.style.scss';
import { Card } from '../card-container/card-container.component';

import {TransactionContext} from '../../context/transactions.context';

export const Balance = (props) => {
    
    const { transactions } = useContext(TransactionContext);

    const getIncome = function() {
        return transactions.reduce((acc, {amount}) => amount>0?amount+acc : acc
        , 0);
    }

    const getExpense = function() {
        return transactions.reduce((acc, {amount}) => amount<0?amount+acc : acc
        , 0);
    }

    const getDividerColour = function() {
        return income>expense?'credit':'debit';
    }

    const income = Math.abs(getIncome());
    const expense = Math.abs(getExpense());

    return (
        <div className='balances-container'>
            <Card hollow>
                <div className='balances-info'>
                    <div className='credit'>
                        <span className='label'>
                            Income
                        </span>
                        ${income}
                    </div>
                    <div className={`divider-${getDividerColour()}`}>
                    </div>
                    <div className='debit'>
                        <span className='label'>
                            Expense
                        </span>
                        ${expense}
                    </div>
                </div>
            </Card>
        </div>
    )
}
