import React, {useState, useContext} from 'react';
import './transaction.style.scss';
import { Card } from '../card-container/card-container.component';

import { TransactionContext } from '../../context/transactions.context';

export const Transaction = ({ transaction }) => {

    const { deleteTransaction } = useContext(TransactionContext);

    const [displayDelete, setDisplayDelete] = useState(false);

    const {description, amount, _id} = transaction;

    const getBorderColour = function () {
        return amount > 0 ? 'credit-border' : 'debit-border';
    }

    const getSign = function () {
        return amount > 0 ? '+' : '-';
    }

    const toggleDeleteDisplay = function(event) {
        event.stopPropagation();
        setDisplayDelete(!displayDelete);
    }

    const shouldDisplayDelete = function(){
        return displayDelete? 'visible':'';
    }

    const deleteTransactionById = function(event) {
        event.stopPropagation();
        deleteTransaction(_id);
    }

    return (
        <div className='transaction-list-card'>
            <Card hollow>
                <div className={
                    'transaction-list-card-content '
                    + getBorderColour()
                    }
                    onClick={toggleDeleteDisplay}
                >
                    <span>{description}</span>
                    <span> {getSign()}${Math.abs(amount)} </span>
                    <div className={`delete-button ${shouldDisplayDelete()}`} 
                        onClick={deleteTransactionById}
                    >
                        &#10005;
                    </div>
                </div>
            </Card>
        </div>
    )
}
