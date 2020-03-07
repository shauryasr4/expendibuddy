import React, { useState, useContext } from 'react';
import './add-transaction.style.scss';
import { v1 as uuid } from 'uuid';
import { Card } from '../card-container/card-container.component';

import { TransactionContext } from '../../context/transactions.context';

export const AddTransaction = () => {

    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState();

    const { addTransaction } = useContext(TransactionContext);

    const resetForm = function() {
        setDescription('');
        setAmount(0);
    }

    const validateData = function() {
        if(isNaN(amount))
        {
            return 'Please enter a valid number';
        }
        if(!description)
        {
            return 'Please enter a valid description';
        }
    }

    const submitTransaction = function(event) {
        event.preventDefault();
        const errorMessage = validateData();
        if(errorMessage){
            alert(errorMessage);
            return;
        }
        const id= uuid();
        addTransaction({
            id,
            description,
            amount
        })
        resetForm();
    }

    return (
        <div className='transaction-form-section'>
            <div className='header'>Add new transaction</div>
            <Card hollow>
                <form className='transaction-form-container' 
                    onSubmit={submitTransaction}
                >
                    <div className='form-input-container'>
                        <label htmlFor='text'>Description</label>
                        <input type='text' 
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder='Enter Description' 
                        />
                    </div>
                    <div className='form-input-container'>
                        <label htmlFor='amount'>
                            Amount
                        </label>
                        <input type='number' 
                            value={amount}
                            onChange={(e) => setAmount(parseInt(e.target.value))}
                            placeholder='Enter amount (- for spend)' 
                        />
                    </div>
                    <button className='btn' type='submit'>Add transaction</button>
                </form>
            </Card>
        </div>
    )
}
