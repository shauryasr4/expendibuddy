import React, {useContext, useEffect} from 'react';
import './transaction-history.style.scss';
import { Transaction } from '../transaction/transaction.component';

import { TransactionContext } from '../../context/transactions.context';

export const TransactionHistory = ({transactionList}) => {

    const {transactions, getTransactions} = useContext(TransactionContext);

    useEffect(() => {
        getTransactions();
    }, []);

    return (
        <div className='history'>
            <div className='header'>
                History 
            </div>
            <div className='list'>
                {
                    transactions.map(function(transaction) {
                        return <Transaction 
                            key={transaction._id} 
                            transaction={transaction}
                        />
                    })
                }   
            </div>
        </div>
    )
}
