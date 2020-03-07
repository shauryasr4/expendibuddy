import React, { createContext, useReducer } from "react";
import RootReducer from '../reducer/root.reducer';

const initialTransactions = {
  transactions: [
      
  ]
};

export const TransactionContext = createContext(initialTransactions);

export const TransactionsProvider = function({ children }) {
  const [state, dispatch] = useReducer(RootReducer, initialTransactions);

  const deleteTransaction = function(id) {
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
  }

  const addTransaction = function(newTransaction) {
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: newTransaction
    });
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
