import React, {useContext} from 'react';
import './transaction-history.style.scss';
import { Transaction } from '../transaction/transaction.component';

import { TransactionContext } from '../../context/transactions.context';

export const TransactionHistory = ({transactionList}) => {

    const {transactions} = useContext(TransactionContext);

    return (
        <div className='history'>
            <div className='header'>
                History 
            </div>
            <div className='list'>
                {
                    transactions.map(function(transaction) {
                        return <Transaction 
                            key={transaction.id} 
                            transaction={transaction}
                        />
                    })
                }   
            </div>
        </div>
    )
}
